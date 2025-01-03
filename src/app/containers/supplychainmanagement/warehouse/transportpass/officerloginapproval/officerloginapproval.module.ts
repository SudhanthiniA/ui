import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {OfficerloginapprovalRoutingModule} from './officerloginapproval-routing.module';
import { OfficerloginapprovalComponent } from './officerloginapproval.component';
import { ViewComponent } from './view/view.component';




@NgModule({
  declarations: [OfficerloginapprovalComponent, ViewComponent],
  imports: [
    CommonModule,
    OfficerloginapprovalRoutingModule,
    SharedModule
  ]
})
export class OfficerloginapprovalModule { }
