import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { RegistrationreportRoutingModule } from './registrationreport-routing.module';
import { WsbondapplicationsummaryComponent } from './wsbondapplicationsummary/wsbondapplicationsummary.component';
import { WsbondapplicationstatusdetailsComponent } from './wsbondapplicationstatusdetails/wsbondapplicationstatusdetails.component';
import { BrandandlabeltrackingComponent } from './brandandlabeltracking/brandandlabeltracking.component';
import { AuthorizedimportunitComponent } from './authorizedimportunit/authorizedimportunit.component';
import { BrandlabelapprovalComponent } from './brandlabelapproval/brandlabelapproval.component';


@NgModule({
  declarations: [WsbondapplicationsummaryComponent, WsbondapplicationstatusdetailsComponent, BrandandlabeltrackingComponent, AuthorizedimportunitComponent, BrandlabelapprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegistrationreportRoutingModule
  ]
})
export class RegistrationreportModule { }
