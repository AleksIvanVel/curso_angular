import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { injectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//importamos la librerira Http para las llamadas a la API
  ],
  providers: [
    CookieService,
    provideHttpClient(withInterceptors([injectSessionInterceptor])) // Registrar el interceptor como función
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
