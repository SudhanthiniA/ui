import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { MassflowapplicantRoutingModule } from './massflowapplicant-routing.module';
import { MassflowapplicantComponent } from './massflowapplicant.component';
import { AddmassflowapplicantComponent } from './addmassflowapplicant/addmassflowapplicant.component';
import { ViewmassflowapplicantComponent } from './viewmassflowapplicant/viewmassflowapplicant.component';



@NgModule({
  declarations: [MassflowapplicantComponent, AddmassflowapplicantComponent, ViewmassflowapplicantComponent],
  imports: [
    CommonModule,
    MassflowapplicantRoutingModule,
    SharedModule
  ]
})
export class MassflowapplicantModule { }
