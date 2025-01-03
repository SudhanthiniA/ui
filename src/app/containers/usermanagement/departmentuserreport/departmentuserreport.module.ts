import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { DepartmentuserreportRoutingModule } from './departmentuserreport-routing.module';
import { DepartmentuserreportComponent } from './departmentuserreport.component';
import { ViewemailComponent } from './viewemail/viewemail.component';
import { AddComponent } from './add/add.component';




@NgModule({
  declarations: [DepartmentuserreportComponent, ViewemailComponent,AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    DepartmentuserreportRoutingModule
  ]
})
export class DepartmentuserreportModule { }
