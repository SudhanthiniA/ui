import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { SharedModule } from '@appThemeShared/shared.module';

import { OtproductionplanRoutingModule } from './otproductionplan-routing.module';
import { OtproductionplanComponent } from './otproductionplan.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, OtproductionplanComponent],
  imports: [
    CommonModule,
    OtproductionplanRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot()

  ]
})
export class OtproductionplanModule { }
