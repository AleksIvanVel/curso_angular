import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SahredModule } from '@shared/sahred.module';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SahredModule
  ]
})
export class HomeModule { }
