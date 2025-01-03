import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WsbondapplicationsummaryComponent } from './wsbondapplicationsummary/wsbondapplicationsummary.component';
import { WsbondapplicationstatusdetailsComponent } from './wsbondapplicationstatusdetails/wsbondapplicationstatusdetails.component';
import { BrandandlabeltrackingComponent } from './brandandlabeltracking/brandandlabeltracking.component';
import { AuthorizedimportunitComponent } from './authorizedimportunit/authorizedimportunit.component';
import { BrandlabelapprovalComponent } from './brandlabelapproval/brandlabelapproval.component';


const routes: Routes = [
  { path: 'wsbondsummary', component: WsbondapplicationsummaryComponent },
  { path: 'wsbondsummarydetails', component: WsbondapplicationstatusdetailsComponent },
  { path: 'brandandlabeltracking', component: BrandandlabeltrackingComponent },
  { path: 'authorizedimportunit', component: AuthorizedimportunitComponent },
  { path: 'brandlabelapproval', component: BrandlabelapprovalComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationreportRoutingModule { }
