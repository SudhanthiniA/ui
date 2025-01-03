import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UploadletteragainstspiritpurchaserequestComponent } from './uploadletteragainstspiritpurchaserequest.component';
import { ViewComponent } from './view/view.component';
import { uploadletteragainstspiritpurchaserequestRoutingModule } from './uploadletteragainstspiritpurchaserequest-routing.module';



@NgModule({
  declarations: [UploadletteragainstspiritpurchaserequestComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    uploadletteragainstspiritpurchaserequestRoutingModule
  ]
})
export class UploadletteragainstspiritpurchaserequestModule { }
