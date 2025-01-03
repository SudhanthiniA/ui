import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { RetailtransferacceptanceRoutingModule } from './retailtransferacceptance-routing.module';
import { RetailtransferacceptanceComponent } from './retailtransferacceptance.component';
import { ViewComponent } from './view/view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [RetailtransferacceptanceComponent, ViewComponent,],
  imports: [
    CommonModule,
    RetailtransferacceptanceRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class RetailtransferacceptanceModule { }
