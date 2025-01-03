import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { EmailrequestRoutingModule } from './emailrequest-routing.module';
import { EmailrequestComponent } from './emailrequest.component';
import { ViewemailComponent } from './viewemail/viewemail.component';




@NgModule({
  declarations: [EmailrequestComponent, ViewemailComponent],
  imports: [
    CommonModule,
    SharedModule,
    EmailrequestRoutingModule
  ]
})
export class EmailrequestModule { }
