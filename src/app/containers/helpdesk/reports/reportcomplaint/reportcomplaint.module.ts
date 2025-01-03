import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ReportcomplaintRoutingModule } from './reportcomplaint-routing.module';
import { ReportcomplaintComponent } from './reportcomplaint.component';


@NgModule({
  declarations: [ReportcomplaintComponent],
  imports: [
    CommonModule,
    ReportcomplaintRoutingModule,
    SharedModule
  ]
})
export class ReportcomplaintModule { }
