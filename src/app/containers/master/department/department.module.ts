import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [DepartmentComponent, AddDepartmentComponent, ViewDepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class DepartmentModule { }
