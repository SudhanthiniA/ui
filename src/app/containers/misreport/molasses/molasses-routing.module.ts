import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatedetailsofmolassesreportComponent } from './ratedetailsofmolassesreport/ratedetailsofmolassesreport.component';
import { DistillerytankconversionreportComponent } from './distillerytankconversionreport/distillerytankconversionreport.component';
import { ReservedispatchreportComponent } from './reservedispatchreport/reservedispatchreport.component';

import { MolassespermitliftingComponent } from './molassespermitlifting/molassespermitlifting.component';
import { ShherastatementformatportalComponent } from './shherastatementformatportal/shherastatementformatportal.component';
import { SugarmillproductionComponent } from './sugarmillproduction/sugarmillproduction.component';



const routes: Routes = [
  { path: 'molassespermitlifting', component: MolassespermitliftingComponent },
  { path: 'ratedetailsofmolasses', component: RatedetailsofmolassesreportComponent },
  { path: 'distillerytankconversion', component: DistillerytankconversionreportComponent },
  { path: 'reservedispatch', component: ReservedispatchreportComponent },
  { path: 'shherastatementformatportal', component: ShherastatementformatportalComponent },
  { path: 'sugarmillproduction', component: SugarmillproductionComponent }

  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MolassesRoutingModule { }
