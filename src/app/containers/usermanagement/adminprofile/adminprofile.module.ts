import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AdminprofileRoutingModule } from './adminprofile-routing.module';
import { AdminprofileComponent } from './adminprofile.component';

@NgModule({
  declarations: [AdminprofileComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminprofileRoutingModule
  ]
})
export class AdminprofileModule { }
