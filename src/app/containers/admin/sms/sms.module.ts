import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SmsRoutingModule } from './sms-routing.module';
import { SmsComponent } from './sms.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [SmsComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SmsRoutingModule
  ]
})
export class SmsModule { }
