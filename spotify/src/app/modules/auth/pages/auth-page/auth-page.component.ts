import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit{
  formLogin: FormGroup = new FormGroup({}); //inicializacion del form group
  errorSession: boolean = false;

  constructor(private _atuhSerivce: AuthService,  //inyeccion del servicios
              
              //servicio para utilizar cookies
              private cookie: CookieService
            ){} 

  ngOnInit(): void {
      this.formLogin = new FormGroup(
      {
        email:new FormControl('',[
          Validators.required,        //validacion del input
          Validators.email
        ]),
        password:new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  //captura los datos del form
  sendLogin(): void{
    const {email, password} = this.formLogin.value  //obtenemos los datos con destructuracion

    //llamada al servicio 
    this._atuhSerivce.sendCredentials(email,password)
    .subscribe(responseOk =>{
      console.log('sesion iniciada correctamente')

      const {tokenSession, data} = responseOk;

      this.cookie.set('tokenSession', tokenSession, 4, '/');
    },
    err =>{
      this.errorSession = true;
      console.error('error al inciar sesion');
    }) 
  }

}
