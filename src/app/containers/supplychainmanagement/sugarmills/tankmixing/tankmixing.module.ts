import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { TankmixingRoutingModule } from './tankmixing-routing.module';
import { TankmixingComponent } from './tankmixing.component';
import { AddtankconversionComponent } from './addtankconversion/addtankconversion.component';
import { ViewtankconversionComponent } from './viewtankconversion/viewtankconversion.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [TankmixingComponent, AddtankconversionComponent, ViewtankconversionComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    TankmixingRoutingModule
  ]
})
export class TankmixingModule { }
