import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PurchaserequestbasewineComponent } from './purchaserequestbasewine.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {PurchaserequestbasewineRoutingModule} from './purchaserequestbasewine-routing.module';


@NgModule({
  declarations: [PurchaserequestbasewineComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PurchaserequestbasewineRoutingModule
  ]
})
export class PurchaserequestbasewineModule { }
