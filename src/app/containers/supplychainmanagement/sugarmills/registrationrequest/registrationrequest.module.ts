import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { RegistrationrequestRoutingModule } from './registrationrequest-routing.module';
import { RegistrationrequestComponent } from './registrationrequest.component';
import { ViewregistrationrequestComponent } from './viewregistrationrequest/viewregistrationrequest.component';
import { AddeditregistrationrequestComponent } from './addeditregistrationrequest/addeditregistrationrequest.component';

@NgModule({
  declarations: [
    RegistrationrequestComponent, 
    ViewregistrationrequestComponent, 
    AddeditregistrationrequestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegistrationrequestRoutingModule
  ]
})
export class RegistrationrequestModule { }
