import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd8aRoutingModule } from './pd8a-routing.module';
import { Pd8aComponent } from './pd8a.component';
import { Addpd8aComponent } from './addpd8a/addpd8a.component';
import { Viewpd8aComponent } from './viewpd8a/viewpd8a.component';
  

@NgModule({
  declarations: [Pd8aComponent, Addpd8aComponent, Viewpd8aComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd8aRoutingModule
  ]
})
export class Pd8aModule { }
