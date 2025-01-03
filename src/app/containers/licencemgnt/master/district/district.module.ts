import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DistrictRoutingModule } from './district-routing.module';
import { DistrictComponent } from './district.component';
import { ViewdistrictComponent } from './viewdistrict/viewdistrict.component';



@NgModule({
  declarations: [DistrictComponent, ViewdistrictComponent],
  imports: [
    CommonModule,
    SharedModule,
    DistrictRoutingModule
  ]
})
export class DistrictModule { }
