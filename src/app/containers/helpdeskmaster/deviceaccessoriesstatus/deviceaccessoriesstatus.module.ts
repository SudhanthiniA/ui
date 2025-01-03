import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DeviceaccessoriesstatusRoutingModule } from './deviceaccessoriesstatus-routing.module';
import { DeviceaccessoriesstatusComponent } from './deviceaccessoriesstatus.component';
import { AdddeviceaccessoriesstatusComponent } from './adddeviceaccessoriesstatus/adddeviceaccessoriesstatus.component';
import { ViewdeviceaccessoriesstatusComponent } from './viewdeviceaccessoriesstatus/viewdeviceaccessoriesstatus.component';



@NgModule({
  declarations: [DeviceaccessoriesstatusComponent, AdddeviceaccessoriesstatusComponent, ViewdeviceaccessoriesstatusComponent],
  imports: [
    CommonModule,
    SharedModule,
    DeviceaccessoriesstatusRoutingModule
  ]
})
export class DeviceaccessoriesstatusModule { }
