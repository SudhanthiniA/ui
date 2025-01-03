import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { ProfilelicenseeRoutingModule } from './profilelicensee-routing.module';
import { ProfilelicenseeComponent } from './profilelicensee.component';



@NgModule({
  declarations: [ProfilelicenseeComponent],
  imports: [
    ProfilelicenseeRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class ProfilelicenseeModule { }
