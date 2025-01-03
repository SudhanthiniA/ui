import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { DepartmentuserRoutingModule } from './departmentuser-routing.module';
import { DepartmentuserComponent } from './departmentuser.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [DepartmentuserComponent, AddComponent],
  imports: [
    CommonModule,
    DepartmentuserRoutingModule,
    SharedModule
  ]
})
export class DepartmentuserModule { }
