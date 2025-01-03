import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
