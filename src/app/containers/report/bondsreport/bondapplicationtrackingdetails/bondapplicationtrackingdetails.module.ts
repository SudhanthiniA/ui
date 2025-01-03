import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BondapplicationtrackingdetailsRoutingModule } from './bondapplicationtrackingdetails-routing.module';
import { BondapplicationtrackingdetailsComponent } from './bondapplicationtrackingdetails.component';

@NgModule({
  imports: [
    BondapplicationtrackingdetailsRoutingModule,
    SharedModule,
    NgbModule,
  ],
  declarations: [
    BondapplicationtrackingdetailsComponent
  ]
})
export class BondapplicationtrackingdetailsModule { }
