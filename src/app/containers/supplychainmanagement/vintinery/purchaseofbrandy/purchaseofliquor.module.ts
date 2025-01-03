import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {PurchaseofliquorRoutingModule} from './purchaseofliquor-routing.module';
import { PurchaseofliquorComponent } from './purchaseofliquor.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [PurchaseofliquorComponent, AddComponent , ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PurchaseofliquorRoutingModule
  ]
})
export class PurchaseofliquorModule { }
