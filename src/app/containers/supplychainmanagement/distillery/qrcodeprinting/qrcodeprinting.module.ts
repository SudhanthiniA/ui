import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { QrcodeprintingRoutingModule } from './qrcodeprinting-routing.module';
import { QrcodeprintingComponent } from './qrcodeprinting.component';
import { AddqrcodeprintingComponent } from './addqrcodeprinting/addqrcodeprinting.component';
import { ViewqrcodeprintingComponent } from './viewqrcodeprinting/viewqrcodeprinting.component';

@NgModule({
  declarations: [QrcodeprintingComponent, AddqrcodeprintingComponent, ViewqrcodeprintingComponent],
  imports: [
    CommonModule,
    SharedModule,
    QrcodeprintingRoutingModule
  ]
})
export class QrcodeprintingModule { }
