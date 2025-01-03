import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AssetbrandsComponent } from './devicehardwarename.component';
import { DevicehardwarenameRoutingModule } from './devicehardwarename-routing.module';
import { AdddevicehardwarenameComponent } from './adddevicehardwarename/devicehardwarename.component';
import { ViewdevicehardwarenameComponent } from './viewdevicehardwarename/devicehardwarename.component';

@NgModule({
  declarations: [AssetbrandsComponent, AdddevicehardwarenameComponent, ViewdevicehardwarenameComponent],
  imports: [
    CommonModule,
    SharedModule,
    DevicehardwarenameRoutingModule
  ]
})
export class DevicehardwaredModule { }
