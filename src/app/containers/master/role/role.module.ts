import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { AddroleComponent } from './addrole/addrole.component';
import { ViewroleComponent } from './viewrole/viewrole.component';

@NgModule({
  declarations: [
    RoleComponent,
    AddroleComponent,
    ViewroleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
