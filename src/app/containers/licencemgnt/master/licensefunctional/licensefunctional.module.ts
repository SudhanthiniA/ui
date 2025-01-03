import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { LicensefunctionalRoutingModule } from './licensefunctional-routing.module';
import { LicensefunctionalComponent } from './licensefunctional.component';
import { ViewlicensefunctionalComponent } from './viewlicensefunctional/viewlicensefunctional.component';



@NgModule({
  declarations: [LicensefunctionalComponent, ViewlicensefunctionalComponent,],
  imports: [
    CommonModule,
    SharedModule,
    LicensefunctionalRoutingModule
  ]
})
export class LicensefunctionalModule { }
