import { SharedModule } from '@appThemeShared/shared.module';
import { LicencetypeComponent } from './licencetype.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicencetypeRoutingModule } from './licencetype-routing.module';
import { AddeditlicencetypeComponent } from './addeditlicencetype/addeditlicencetype.component';
import { ViewlicencetypeComponent } from './viewlicencetype/viewlicencetype.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AddeditlicencetypeComponent,
    ViewlicencetypeComponent,
    LicencetypeComponent
  ],
  imports: [
    CommonModule,
    LicencetypeRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class LicencetypeModule { }
