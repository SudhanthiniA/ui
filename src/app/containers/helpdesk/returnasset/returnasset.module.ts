import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { ReturnassetRoutingModule } from './returnasset-routing.module';
import { ReturnassetComponent } from './returnasset.component';
import { AddreturnassetComponent } from './addreturnasset/addreturnasset.component';
import { ViewreturnassetComponent } from './viewreturnasset/viewreturnasset.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';



@NgModule({
  declarations: [ReturnassetComponent, AddreturnassetComponent, ViewreturnassetComponent, AcknowledgementComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReturnassetRoutingModule
  ]
})
export class ReturnassetModule { }
