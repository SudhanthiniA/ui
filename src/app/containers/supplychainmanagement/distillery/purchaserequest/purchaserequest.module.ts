import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaserequestRoutingModule } from './purchaserequest-routing.module';
import { PurchaserequestComponent } from './purchaserequest.component';
import { AddeditpurchaserequestComponent } from './addeditpurchaserequest/addeditpurchaserequest.component';
import { ViewpurchaserequestComponent } from './viewpurchaserequest/viewpurchaserequest.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [PurchaserequestComponent, AddeditpurchaserequestComponent, ViewpurchaserequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    PurchaserequestRoutingModule
  ]
})
export class PurchaserequestModule { }
