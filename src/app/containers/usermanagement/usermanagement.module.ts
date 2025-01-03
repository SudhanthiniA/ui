import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanagementRoutingModule } from './usermanagement-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
// import { AdminuserComponent } from './adminuser/adminuser.component';
// import { EntitysubuserComponent } from './entitysubuser/entitysubuser.component';
// import { CitizenuserComponent } from './citizenuser/citizenuser.component';
// import { DesignationmanageComponent } from './designationmanage/designationmanage.component';

@NgModule({
  // declarations: [DesignationmanageComponent],
  declarations: [],
  imports: [
    CommonModule,
    UsermanagementRoutingModule,
    SharedModule
  ]
})
export class UsermanagementModule { }
