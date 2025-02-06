import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  try{
    //inyectamos servicio de cookies
    const cookieServce = inject(CookieService)

    //extraemos el token de la cookie
    const token = cookieServce.get('tokenSession')

    //se clona la request original y se agrega el encabezado con el token
    let newRequest= req
    newRequest = req.clone({
      setHeaders:{
        authorization: `Bearer ${token}`
      }
    })
    return next(newRequest)

  }catch(e){
    console.error('error al enviar los headers de la peticion' ,e)
    return next(req);
  }
};
