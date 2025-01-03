import { LiquormasterComponent } from './liquormaster.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquormasterRoutingModule } from './liquormaster-routing.module';
import { AddeditliquorComponent } from './addeditliquor/addeditliquor.component';
import { ViewliquorComponent } from './viewliquor/viewliquor.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    LiquormasterComponent, 
    AddeditliquorComponent, 
    ViewliquorComponent
  ],
  imports: [
    CommonModule,
    LiquormasterRoutingModule,
    DataTablesModule,
    SharedModule
  ]
})
export class LiquormasterModule { }
