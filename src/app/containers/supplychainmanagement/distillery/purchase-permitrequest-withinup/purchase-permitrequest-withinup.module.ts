import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasePermitrequestWithinupRoutingModule } from './purchase-permitrequest-withinup-routing.module';
import { PurchasePermitrequestWithinupComponent } from './purchase-permitrequest-withinup.component';
import { AddPermitrequestComponent } from './add-permitrequest/add-permitrequest.component';
import { ViewPermitrequestComponent } from './view-permitrequest/view-permitrequest.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [PurchasePermitrequestWithinupComponent, AddPermitrequestComponent, ViewPermitrequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    PurchasePermitrequestWithinupRoutingModule
  ]
})
export class PurchasePermitrequestWithinupModule { }
