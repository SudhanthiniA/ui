import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadcodeRoutingModule } from './headcode-routing.module';
import { HeadcodeComponent } from './headcode.component';
import { AddHeadcodeComponent } from './add-headcode/add-headcode.component';
import { ViewHeadcodeComponent } from './view-headcode/view-headcode.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [HeadcodeComponent, AddHeadcodeComponent, ViewHeadcodeComponent],
  imports: [
    CommonModule,
    HeadcodeRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule
  ]
})
export class HeadcodeModule { }
