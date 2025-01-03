import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { LicenseeRoutingModule } from './licensee-routing.module';
import { LicenseeComponent } from './licensee.component';
import { AddLicenseeComponent } from './add-licensee/add-licensee.component';
import { ViewLicenseeComponent } from './view-licensee/view-licensee.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    LicenseeComponent, 
    AddLicenseeComponent, 
    ViewLicenseeComponent
  ],
  imports: [
    CommonModule,
    LicenseeRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class LicenseeModule { }
