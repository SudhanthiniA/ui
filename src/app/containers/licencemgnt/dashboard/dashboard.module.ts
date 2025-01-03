import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { NgbPopoverModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardNewComponent } from './dashboard-new/dashboard-new.component';


@NgModule({
  declarations: [DashboardComponent, DashboardNewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgbPopoverModule,
    NgbProgressbarModule
  ]
})
export class DashboardModule { }
