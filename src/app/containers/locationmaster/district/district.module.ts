import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DistrictRoutingModule } from './district-routing.module';
import { DistrictComponent } from './district.component';
import { AddDistrictComponent } from './add-district/add-district.component';
import { ViewDistrictComponent } from './view-district/view-district.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    DistrictRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    DistrictComponent,
    AddDistrictComponent,
    ViewDistrictComponent
  ]
})
export class DistrictModule { }
