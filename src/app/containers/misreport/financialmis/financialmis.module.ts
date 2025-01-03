import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialmisRoutingModule } from './financialmis-routing.module';
import { HandwisechallanComponent } from './handwisechallan/handwisechallan.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { HandwisechallandistrictComponent } from './handwisechallandistrict/handwisechallandistrict.component';
import { ChallandepositreportComponent } from './challandepositreport/challandepositreport.component';
import { ChallansuccessreportComponent } from './challansuccessreport/challansuccessreport.component';
import { DepositagainstspecialfeesComponent } from './depositagainstspecialfees/depositagainstspecialfees.component';
import { DistillerybrewdutyregisterComponent } from './distillerybrewdutyregister/distillerybrewdutyregister.component';
import { G6reportComponent } from './g6report/g6report.component';
import { ScanningfeeComponent } from './scanningfee/scanningfee.component';
import { SpecialadditionalconsiderationComponent } from './specialadditionalconsideration/specialadditionalconsideration.component';
import { TreasuryrajkoshscrollComponent } from './treasuryrajkoshscroll/treasuryrajkoshscroll.component';




@NgModule({
  declarations: [ChallandepositreportComponent, ChallansuccessreportComponent, DepositagainstspecialfeesComponent, DistillerybrewdutyregisterComponent, G6reportComponent,HandwisechallanComponent,HandwisechallandistrictComponent, ScanningfeeComponent, SpecialadditionalconsiderationComponent, TreasuryrajkoshscrollComponent],
  imports: [
    CommonModule,
    SharedModule,
    FinancialmisRoutingModule
  ]
})
export class FinancialmisModule { }
