import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TankregestrationapprovalRoutingModule } from './tankregestrationapproval-routing.module';
import { TankregelistComponent } from './tankregelist/tankregelist.component';
import { TankregeviewComponent } from './tankregeview/tankregeview.component';


@NgModule({
  declarations: [TankregelistComponent, TankregeviewComponent],
  imports: [
    CommonModule,
    TankregestrationapprovalRoutingModule,SharedModule,NgbModule
  ]
})
export class TankregestrationapprovalModule { }
