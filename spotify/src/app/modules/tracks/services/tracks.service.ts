import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { enviroment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TracksService {
  private readonly URL = enviroment.api;

  //inyeccion del servicio para hacer las llamadas http
  constructor(private httpClient: HttpClient) { 
  }

  getAllTracks$():Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map((dataRaw:any) =>{
        return dataRaw.data       //aplica un filtro para extraer solo la propiedad data
      })
    )
  }

  getAllRandom$():Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}:any) =>{          // utilzar { } para la desestrcturacion de js
        return data.reverse()       //podemos aplicar un filtro para extraer solo la propiedad data y hacer un reverse a la lista
      }),

      //manejo de errores
      catchError((err) =>{
        console.error('Ha ocurido un error al consultar el servidor')
        
        //retornamos una lista vacia para 
        return of([])
      })
    )
  }
}
