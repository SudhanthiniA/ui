import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicencemasterRoutingModule } from './licencemaster-routing.module';
import { LicencemasterComponent } from './licencemaster.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddlicenceComponent } from './addlicence/addlicence.component';
import { ViewlicenceComponent } from './viewlicence/viewlicence.component';
import { DataTablesModule } from 'angular-datatables';
import { MastersModule } from '../masters.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    LicencemasterComponent, 
    AddlicenceComponent, 
    ViewlicenceComponent
  ],
  imports: [
    CommonModule,
    LicencemasterRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    DataTablesModule,
    MastersModule
  ]
})
export class LicencemasterModule { }
