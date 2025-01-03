import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceregistrationRoutingModule } from './deviceregistration-routing.module';
import { DeviceregistrationComponent } from './deviceregistration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [DeviceregistrationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    DeviceregistrationRoutingModule,
    SharedModule
  ]
})
export class DeviceregistrationModule { }
