import { NgModule } from '@angular/core';

import { DashAnalyticsRoutingModule } from './dash-analytics-routing.module';
import { DashAnalyticsComponent } from './dash-analytics.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbPopoverModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    DashAnalyticsRoutingModule,
    SharedModule,
    NgbProgressbarModule,
    NgbPopoverModule
  ],
  declarations: [
    DashAnalyticsComponent,
  ]
})
export class DashAnalyticsModule { }
