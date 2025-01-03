import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TypeofuserComponent } from './typeofuser.component';
import {TypeofuserRoutingModule} from './typeofuser-routing.module';


@NgModule({
  declarations: [TypeofuserComponent],
  imports: [
    CommonModule,
    TypeofuserRoutingModule,
    SharedModule
  ]
})
export class TypeofuserModule { }
