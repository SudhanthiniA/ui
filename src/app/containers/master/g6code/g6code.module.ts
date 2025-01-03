import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { G6codeRoutingModule } from './g6code-routing.module';
import { G6codeComponent } from './g6code.component';
import { AddHeadcodeComponent } from './add-headcode/add-headcode.component';
import { ViewHeadcodeComponent } from './view-headcode/view-headcode.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [G6codeComponent, AddHeadcodeComponent, ViewHeadcodeComponent],
  imports: [
    CommonModule,
    G6codeRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule
  ]
})
export class G6codeModule { }
