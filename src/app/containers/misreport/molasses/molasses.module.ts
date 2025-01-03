import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MolassesRoutingModule } from './molasses-routing.module';
import { MolassespermitliftingComponent } from './molassespermitlifting/molassespermitlifting.component';
import { ShherastatementformatportalComponent } from './shherastatementformatportal/shherastatementformatportal.component';
import { SugarmillproductionComponent } from './sugarmillproduction/sugarmillproduction.component';
import { RatedetailsofmolassesreportComponent } from './ratedetailsofmolassesreport/ratedetailsofmolassesreport.component';
import { DistillerytankconversionreportComponent } from './distillerytankconversionreport/distillerytankconversionreport.component';
import { ReservedispatchreportComponent } from './reservedispatchreport/reservedispatchreport.component';



@NgModule({
  declarations: [ShherastatementformatportalComponent,SugarmillproductionComponent,MolassespermitliftingComponent, RatedetailsofmolassesreportComponent, DistillerytankconversionreportComponent, ReservedispatchreportComponent],
  imports: [
    CommonModule,
    SharedModule,
    MolassesRoutingModule
  ]
})
export class MolassesModule { }
