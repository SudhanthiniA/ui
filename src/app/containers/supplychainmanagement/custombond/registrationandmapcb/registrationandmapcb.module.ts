import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RegistrationandmapcbRoutingModule } from './registrationandmapcb-routing.module';
import { RegistrationandmapcbComponent } from './registrationandmapcb.component';
import { AddregistrationandmapcbComponent } from './addregistrationandmapcb/addregistrationandmapcb.component';
import { ViewregistrationandmapcbComponent } from './viewregistrationandmapcb/viewregistrationandmapcb.component';

@NgModule({
  declarations: [RegistrationandmapcbComponent, AddregistrationandmapcbComponent, ViewregistrationandmapcbComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegistrationandmapcbRoutingModule
  ]
})
export class RegistrationandmapcbModule { }
