import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HandwisechallanComponent } from './handwisechallan/handwisechallan.component';
import { HandwisechallandistrictComponent } from './handwisechallandistrict/handwisechallandistrict.component';

import { ChallandepositreportComponent } from './challandepositreport/challandepositreport.component';
import { ChallansuccessreportComponent } from './challansuccessreport/challansuccessreport.component';
import { DepositagainstspecialfeesComponent } from './depositagainstspecialfees/depositagainstspecialfees.component';
import { DistillerybrewdutyregisterComponent } from './distillerybrewdutyregister/distillerybrewdutyregister.component';
import { G6reportComponent } from './g6report/g6report.component';
import { ScanningfeeComponent } from './scanningfee/scanningfee.component';
import { SpecialadditionalconsiderationComponent } from './specialadditionalconsideration/specialadditionalconsideration.component';
import { TreasuryrajkoshscrollComponent } from './treasuryrajkoshscroll/treasuryrajkoshscroll.component';

const routes: Routes = [
  { path: 'handwishchallan', component:HandwisechallanComponent },
  { path: 'handwisechallandistrict', component:HandwisechallandistrictComponent },
  { path: 'challandepositreport', component: ChallandepositreportComponent },
  { path: 'challansuccessreport', component: ChallansuccessreportComponent },
  { path: 'depositagainstspecialfees', component: DepositagainstspecialfeesComponent },
  { path: 'distillerybrewdutyreg', component: DistillerybrewdutyregisterComponent },
  { path: 'g6report', component: G6reportComponent },
  { path: 'scanningfee', component: ScanningfeeComponent },
  { path: 'specialadditionalconsideration', component: SpecialadditionalconsiderationComponent },
  { path: 'treasuryrajkoshscroll', component: TreasuryrajkoshscrollComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialmisRoutingModule { }
