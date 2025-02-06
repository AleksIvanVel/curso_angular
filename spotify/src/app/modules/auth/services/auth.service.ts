import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = enviroment.api

  constructor(private _httpClient: HttpClient) { }

  sendCredentials(email:string, password:string):Observable<any>{
    
    const body = {
      email,
      password
    }

    return this._httpClient.post(`${this.URL}/auth/login`, body)
  }
}
