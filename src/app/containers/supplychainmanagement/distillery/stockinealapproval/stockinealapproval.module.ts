import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockinealapprovalComponent } from './stockinealapproval.component';
import { ViewComponent } from './view/view.component';
import {StockinealapprovalRoutingModule} from './stockinealapproval-routing.module';


@NgModule({
  declarations: [StockinealapprovalComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockinealapprovalRoutingModule
  ]
})
export class StockinealapprovalModule { }
