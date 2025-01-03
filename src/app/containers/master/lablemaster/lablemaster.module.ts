import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LablemasterRoutingModule } from './lablemaster-routing.module';
import { AddeditlablemasterComponent } from './addeditlablemaster/addeditlablemaster.component';
import { ViewlablemasterComponent } from './viewlablemaster/viewlablemaster.component';
import { LablemasterComponent } from './lablemaster.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [LablemasterComponent, AddeditlablemasterComponent, ViewlablemasterComponent],
  imports: [
    CommonModule,
    LablemasterRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class LablemasterModule { }
