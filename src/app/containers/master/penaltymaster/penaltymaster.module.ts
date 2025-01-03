import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PenaltymasterRoutingModule } from './penaltymaster-routing.module';
import { AddeditpenaltymasterComponent } from './addeditpenaltymaster/addeditpenaltymaster.component';
import { ViewpenaltyComponent } from './viewpenalty/viewpenalty.component';
import { PenaltymasterComponent } from './penaltymaster.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AddeditpenaltymasterComponent, 
    ViewpenaltyComponent, 
    PenaltymasterComponent
  ],
  imports: [
    CommonModule,
    PenaltymasterRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class PenaltymasterModule { }
