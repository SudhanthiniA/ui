import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RegistrationandmapdebondRoutingModule } from './registrationandmapdebond-routing.module';
import { RegistrationandmapdebondComponent } from './registrationandmapdebond.component';
import { AddregistrationandmapdebondComponent } from './addregistrationandmapdebond/addregistrationandmapdebond.component';
import { ViewregistrationandmapdebondComponent } from './viewregistrationandmapdebond/viewregistrationandmapdebond.component';

@NgModule({
  declarations: [RegistrationandmapdebondComponent, AddregistrationandmapdebondComponent, ViewregistrationandmapdebondComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegistrationandmapdebondRoutingModule
  ]
})
export class RegistrationandmapdebondModule { }
