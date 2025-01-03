import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MworderpickupRoutingModule } from './mworderpickup-routing.module';
import { MworderpickupComponent } from './mworderpickup.component';
import { AddmworderpickupComponent } from './addmworderpickup/addmworderpickup.component';
import { ViewmworderpickupComponent } from './viewmworderpickup/viewmworderpickup.component';

@NgModule({
  declarations: [MworderpickupComponent, AddmworderpickupComponent, ViewmworderpickupComponent],
  imports: [
    CommonModule,
    SharedModule,
    MworderpickupRoutingModule
  ]
})
export class MworderpickupModule { }
