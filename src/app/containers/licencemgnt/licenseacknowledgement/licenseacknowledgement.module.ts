import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
// import { AlertService } from '@app/services';

import { LicenseacknowledgementRoutingModule } from './licenseacknowledgement-routing.module';
import { LicenseacknowledgementComponent } from './licenseacknowledgement.component';

@NgModule({
  declarations: [LicenseacknowledgementComponent],
  imports: [
    CommonModule,
    SharedModule,
    // AlertService,
    LicenseacknowledgementRoutingModule
  ]
})
export class LicenseacknowledgementModule { 
  
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
}
