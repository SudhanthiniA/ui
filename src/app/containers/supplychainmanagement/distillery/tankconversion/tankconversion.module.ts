import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { TankconversionRoutingModule } from './tankconversion-routing.module';
import { TankconversionComponent } from './tankconversion.component';
import { AddtankconversionComponent } from './addtankconversion/addtankconversion.component';
import { ViewtankconversionComponent } from './viewtankconversion/viewtankconversion.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [TankconversionComponent, AddtankconversionComponent, ViewtankconversionComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    TankconversionRoutingModule
  ]
})
export class TankconversionModule { }
