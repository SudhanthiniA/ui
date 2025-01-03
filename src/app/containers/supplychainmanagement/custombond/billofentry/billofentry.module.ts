import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BillofentryRoutingModule } from './billofentry-routing.module';
import { AddbillofentryComponent } from './addbillofentry/addbillofentry.component';
import { ViewbillofentryComponent } from './viewbillofentry/viewbillofentry.component';
import { BillofentryComponent } from './billofentry.component';
import { PreviewbillofentryComponent } from './previewbillofentry/previewbillofentry.component';



@NgModule({
  declarations: [AddbillofentryComponent, ViewbillofentryComponent, BillofentryComponent, PreviewbillofentryComponent],
  imports: [
    CommonModule,
    SharedModule,
    BillofentryRoutingModule
  ]
})
export class BillofentryModule { }
