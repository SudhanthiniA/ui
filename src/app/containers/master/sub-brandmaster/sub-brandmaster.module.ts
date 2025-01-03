import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { SubBrandmasterRoutingModule } from './sub-brandmaster-routing.module';
import { SubBrandmasterComponent } from './sub-brandmaster.component';
import { AddeditsubbrandComponent } from './addeditsubbrand/addeditsubbrand.component';
import { ViewsubbrandComponent } from './viewsubbrand/viewsubbrand.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [SubBrandmasterComponent, AddeditsubbrandComponent, ViewsubbrandComponent],
  imports: [
    CommonModule,
    SharedModule,
    SubBrandmasterRoutingModule,
    DataTablesModule
  ]
})
export class SubBrandmasterModule { }
