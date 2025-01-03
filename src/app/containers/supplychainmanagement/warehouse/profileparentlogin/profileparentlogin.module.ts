import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ProfileparentloginRoutingModule } from './profileparentlogin-routing.module';
import { ProfileparentloginComponent } from './profileparentlogin.component';


@NgModule({
  declarations: [ProfileparentloginComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProfileparentloginRoutingModule
  ]
})
export class ProfileparentloginModule { }


