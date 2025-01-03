import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {PurchasebreakagerefundRoutingModule} from './purchasebreakagerefund-routing.module';
import { PurchasebreakagerefundComponent } from './purchasebreakagerefund.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [PurchasebreakagerefundComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PurchasebreakagerefundRoutingModule
  ]
})
export class PurchasebreakagerefundModule { }
