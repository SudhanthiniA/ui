import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DispatchreportRoutingModule } from './dispatchreport-routing.module';
import { DispatchreportComponent } from './dispatchreport.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [DispatchreportComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DispatchreportRoutingModule
  ]
})
export class DispatchreportModule { }

