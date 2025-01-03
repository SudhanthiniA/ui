import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UiprofileRoutingModule } from './uiprofile-routing.module';
import { UiprofileComponent } from './uiprofile.component';

@NgModule({
  declarations: [UiprofileComponent],
  imports: [
    CommonModule,
    SharedModule,
    UiprofileRoutingModule
  ]
})
export class UiprofileModule { }
