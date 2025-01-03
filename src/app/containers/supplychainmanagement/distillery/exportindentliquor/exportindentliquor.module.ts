import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { ExportindentliquorRoutingModule } from './exportindentliquor-routing.module';
import { ExportindentliquorComponent } from './exportindentliquor.component';
import { AddexportindentliquorComponent } from './addexportindentliquor/addexportindentliquor.component';
import { ViewexportindentliquorComponent } from './viewexportindentliquor/viewexportindentliquor.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [ExportindentliquorComponent, AddexportindentliquorComponent, ViewexportindentliquorComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    ExportindentliquorRoutingModule
  ]
})
export class ExportindentliquorModule { }
