import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BondwiseregistrationRoutingModule } from './bondwiseregistration-routing.module';
import { BondwiseregistrationComponent } from './bondwiseregistration.component';

@NgModule({
  imports: [
    BondwiseregistrationRoutingModule,
    SharedModule,
    NgbModule,
  ],
  declarations: [BondwiseregistrationComponent]
})
export class BondwiseregistrationModule { }
