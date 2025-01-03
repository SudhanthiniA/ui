import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SettingofcamerasandlogdetailsRoutingModule } from './settingofcamerasandlogdetails-routing.module';
import { SettingofcamerasandlogdetailsComponent } from './settingofcamerasandlogdetails.component';
import { AddsettingofcamerasandlogdetailsComponent } from './addsettingofcamerasandlogdetails/addsettingofcamerasandlogdetails.component';
import { ViewsettingofcamerasandlogdetailsComponent } from './viewsettingofcamerasandlogdetails/viewsettingofcamerasandlogdetails.component';



@NgModule({
  declarations: [SettingofcamerasandlogdetailsComponent, AddsettingofcamerasandlogdetailsComponent, ViewsettingofcamerasandlogdetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    SettingofcamerasandlogdetailsRoutingModule
  ]
})
export class SettingofcamerasandlogdetailsModule { }
