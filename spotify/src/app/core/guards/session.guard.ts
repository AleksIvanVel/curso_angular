import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


export const sessionGuard: CanActivateFn = (route, state) => {

  const cookieSerive = inject(CookieService);
  const router = inject(Router);

  const token: boolean = cookieSerive.check('tokenSession');

  if(!token){
    router.navigate(['/', 'auth'])
  }

  return token;
};
