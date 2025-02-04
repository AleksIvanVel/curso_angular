import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit{
  formLogin: FormGroup = new FormGroup({}); //inicializacion del form group

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
    const body = this.formLogin.value
  }

}
