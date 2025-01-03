import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SmsrequestRoutingModule } from './smsrequest-routing.module';
import { SmsrequestComponent } from './smsrequest.component';
import { ViewsmsrequestComponent } from './viewsmsrequest/viewsmsrequest.component';

@NgModule({
  declarations: [SmsrequestComponent,ViewsmsrequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    SmsrequestRoutingModule
  ]
})
export class SmsrequestModule { }
