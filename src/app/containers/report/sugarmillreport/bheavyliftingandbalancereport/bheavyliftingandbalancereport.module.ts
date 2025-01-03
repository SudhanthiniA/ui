import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BheavyliftingandbalancereportRoutingModule } from './bheavyliftingandbalancereport-routing.module';
import { BheavyliftingandbalancereportComponent } from './bheavyliftingandbalancereport.component';

@NgModule({
  imports: [
    BheavyliftingandbalancereportRoutingModule,
    SharedModule,
    NgbModule
  ],
  declarations: [
    BheavyliftingandbalancereportComponent
  ]
})
export class BheavyliftingandbalancereportModule { }
