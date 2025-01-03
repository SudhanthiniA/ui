import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationTypeRoutingModule } from './verification-type-routing.module';
import { VerificationTypeComponent } from './verification-type.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddeditVerificationComponent } from './addedit-verification/addedit-verification.component';
import { ViewVerificationtypeComponent } from './view-verificationtype/view-verificationtype.component';

@NgModule({
  declarations: [VerificationTypeComponent, AddeditVerificationComponent, ViewVerificationtypeComponent],
  imports: [
    CommonModule,
    VerificationTypeRoutingModule,
    SharedModule
  ]
})
export class VerificationTypeModule { }
