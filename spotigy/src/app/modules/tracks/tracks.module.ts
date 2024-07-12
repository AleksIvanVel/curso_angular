import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { SahredModule } from '@shared/sahred.module';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SahredModule
  ]
})
export class TracksModule { }
