import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd9cEfficiencysummaryRoutingModule } from './pd9c-efficiencysummary-routing.module';
import { Pd9cEfficiencysummaryComponent } from './pd9c-efficiencysummary.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddeditPd9cComponent } from './addedit-pd9c/addedit-pd9c.component';
import { ViewPd9cComponent } from './view-pd9c/view-pd9c.component';


@NgModule({
  declarations: [Pd9cEfficiencysummaryComponent, AddeditPd9cComponent,  ViewPd9cComponent],
  imports: [
    CommonModule,
    Pd9cEfficiencysummaryRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Pd9cEfficiencysummaryModule { }
