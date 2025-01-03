import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { RoleComponent } from './role.component';

import { ViewroleComponent } from './viewrole/viewrole.component';
import { RoleRoutingModule } from './role-routing.module';

@NgModule({
  declarations: [RoleComponent,ViewroleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
