import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignationmanageRoutingModule } from './designationmanage-routing.module';
import { DesignationmanageComponent } from './designationmanage.component';
import { AddeditdesignationmanageComponent } from './addeditdesignationmanage/addeditdesignationmanage.component';
import { ViewdesignationmanageComponent } from './viewdesignationmanage/viewdesignationmanage.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    DesignationmanageComponent, 
    AddeditdesignationmanageComponent, 
    ViewdesignationmanageComponent
  ],
  imports: [
    CommonModule,
    DesignationmanageRoutingModule,
    SharedModule
  ],
})
export class DesignationmanageModule { }
