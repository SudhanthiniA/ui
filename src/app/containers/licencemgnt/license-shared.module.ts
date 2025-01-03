import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@appThemeShared/shared.module';
import {
  ApplicationDetailsComponent,
  ApplicationApplicantDetailsComponent,
  ApplicationBankDetailsComponent,
  ApplicationPaymentfeeDetailsComponent,
  ApplicationBussinessUnitComponent,
  ApplicationPremisesDetailsComponent,
  ApplicationBoardMembersComponent,
  ApplicationSiteDetailsComponent,
  ApplicationAttachmentsComponent,
  LicenseAssignedOfficerComponent,
  ApplicationBwflParentDetailsComponent,
  ApplicationLogsComponent,
  ApplicationPremisesAddressComponent
} from '@appLicMgntShared/license';

const components = [
  ApplicationDetailsComponent,
  ApplicationApplicantDetailsComponent,
  ApplicationBankDetailsComponent,
  ApplicationPaymentfeeDetailsComponent,
  ApplicationBussinessUnitComponent,
  ApplicationPremisesDetailsComponent,
  ApplicationBoardMembersComponent,
  ApplicationSiteDetailsComponent,
  ApplicationAttachmentsComponent,
  LicenseAssignedOfficerComponent,
  ApplicationBwflParentDetailsComponent,
  ApplicationLogsComponent,
  ApplicationPremisesAddressComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    RouterModule,
    SharedModule,
  ],
  exports: [
    RouterModule,
    SharedModule,
    ...components
  ]
})
export class LicenseSharedModule { }
