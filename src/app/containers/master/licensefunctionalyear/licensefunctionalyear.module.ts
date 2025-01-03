import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicensefunctionalyearRoutingModule } from './licensefunctionalyear-routing.module';
import { LicensefunctionalyearComponent } from './licensefunctionalyear.component';
import { AddlicensefunctionalyearComponent } from './addlicensefunctionalyear/addlicensefunctionalyear.component';
import { ViewlicensefunctionalyearComponent } from './viewlicensefunctionalyear/viewlicensefunctionalyear.component';



@NgModule({
  declarations: [LicensefunctionalyearComponent, AddlicensefunctionalyearComponent, ViewlicensefunctionalyearComponent],
  imports: [
    CommonModule,
    SharedModule,
    LicensefunctionalyearRoutingModule
  ]
})
export class LicensefunctionalyearModule { }
