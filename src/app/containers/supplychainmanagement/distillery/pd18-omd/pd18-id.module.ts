import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd18IdRoutingModule } from './pd18-id-routing.module';
import { Pd18IdComponent } from './pd18-id.component';
import { Addpd18IdComponent } from './addpd18-id/addpd18-id.component';
import { Viewpd18IdComponent } from './viewpd18-id/viewpd18-id.component';

@NgModule({
  declarations: [Pd18IdComponent, Addpd18IdComponent, Viewpd18IdComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd18IdRoutingModule
  ]
})
export class Pd18IdModule { }
