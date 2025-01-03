
import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { TypeofuserRoutingModule } from './typeofuser-routing.module';
import { TypeofuserComponent } from './typeofuser.component';
import { AddtypeofuserComponent } from './addtypeofuser/addtypeofuser.component';
import { ViewtypeofuserComponent } from './viewtypeofuser/viewtypeofuser.component';



@NgModule({
  declarations: [TypeofuserComponent, AddtypeofuserComponent, ViewtypeofuserComponent],
  imports: [
    CommonModule,
    SharedModule,
    TypeofuserRoutingModule
  ]
})
export class TypeofuserModule { }
