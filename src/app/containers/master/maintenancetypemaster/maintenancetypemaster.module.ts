import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MaintenancetypemasterRoutingModule } from './maintenancetypemaster-routing.module';
import { MaintenancetypemasterComponent } from './maintenancetypemaster.component';
import { AddmaintenancetypemasterComponent } from './addmaintenancetypemaster/addmaintenancetypemaster.component';
import { ViewmaintenancetypemasterComponent } from './viewmaintenancetypemaster/viewmaintenancetypemaster.component';

@NgModule({
  declarations: [MaintenancetypemasterComponent, AddmaintenancetypemasterComponent, ViewmaintenancetypemasterComponent],
  imports: [
    CommonModule,
    MaintenancetypemasterRoutingModule,
    SharedModule
  ]
})
export class MaintenancetypemasterModule { }
