import { SharedModule } from '@appThemeShared/shared.module';
import { DistrictmasterComponent } from './districtmaster.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictmasterRoutingModule } from './districtmaster-routing.module';
import { AddeditdistrictComponent } from './addeditdistrict/addeditdistrict.component';
import { ViewdistrictComponent } from './viewdistrict/viewdistrict.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [DistrictmasterComponent, AddeditdistrictComponent, ViewdistrictComponent],
  imports: [
    CommonModule,
    DistrictmasterRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class DistrictmasterModule { }
