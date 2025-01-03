import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeemasterRoutingModule } from './feemaster-routing.module';
import { FeemasterComponent } from './feemaster.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddfeeComponent } from './addfee/addfee.component';
import { ViewfeeComponent } from './viewfee/viewfee.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [FeemasterComponent, AddfeeComponent, ViewfeeComponent],
  imports: [
    CommonModule,
    FeemasterRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class FeemasterModule { }
