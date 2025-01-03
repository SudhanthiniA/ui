import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SpiritpurchaserequestwithinupRoutingModule } from './spiritpurchaserequestwithinup-routing.module';
import { SpiritpurchaserequestwithinupComponent } from './spiritpurchaserequestwithinup.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [SpiritpurchaserequestwithinupComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SpiritpurchaserequestwithinupRoutingModule,
    SharedModule
  ]
})
export class SpiritpurchaserequestwithinupModule { }
