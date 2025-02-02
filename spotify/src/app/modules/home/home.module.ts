import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SahredModule } from 'src/app/shared/sahred.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SahredModule
  ]
})
export class HomeModule { }
