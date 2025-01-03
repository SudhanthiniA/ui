import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { RegistrationformRoutingModule } from './registrationform-routing.module';
import { RegistrationformComponent } from './registrationform.component';
import { AddregistrationformComponent } from './addregistrationform/addregistrationform.component';

@NgModule({
  declarations: [RegistrationformComponent, AddregistrationformComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegistrationformRoutingModule
  ]
})
export class RegistrationformModule { }
