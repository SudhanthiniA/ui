import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistermanagementRoutingModule } from './registermanagement-routing.module';
import { RegistermanagementComponent } from './registermanagement.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { ViewregisterComponent } from './viewregister/viewregister.component';


@NgModule({
  declarations: [RegistermanagementComponent, ViewregisterComponent],
  imports: [
    CommonModule,
    RegistermanagementRoutingModule,
    SharedModule
  ]
})
export class RegistermanagementModule { }
