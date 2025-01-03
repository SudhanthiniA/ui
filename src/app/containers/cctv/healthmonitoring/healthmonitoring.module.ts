import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbPopoverModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { HealthmonitoringRoutingModule } from './healthmonitoring-routing.module';
import { HealthmonitoringComponent } from './healthmonitoring.component';

@NgModule({
  declarations: [HealthmonitoringComponent],
  imports: [
    CommonModule,
    HealthmonitoringRoutingModule,
    SharedModule,
    NgbPopoverModule,
    NgbProgressbarModule
  ]
})
export class HealthmonitoringModule { }
