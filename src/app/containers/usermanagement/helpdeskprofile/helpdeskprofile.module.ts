import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { HelpdeskprofileRoutingModule } from './helpdeskprofile-routing.module';
import { HelpdeskprofileComponent } from './helpdeskprofile.component';

@NgModule({
  declarations: [HelpdeskprofileComponent],
  imports: [
    CommonModule,
    SharedModule,
    HelpdeskprofileRoutingModule
  ]
})
export class HelpdeskprofileModule { }
