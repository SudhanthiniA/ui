import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AlcoholtechnologistatlabRoutingModule } from './alcoholtechnologistatlab-routing.module';
import { AlcoholtechnologistatlabComponent } from './alcoholtechnologistatlab.component';
import { AddalcoholtechnologistatlabComponent } from './addalcoholtechnologistatlab/addalcoholtechnologistatlab.component';
import { ViewalcoholtechnologistatlabComponent } from './viewalcoholtechnologistatlab/viewalcoholtechnologistatlab.component';

import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [PaymentComponent,AlcoholtechnologistatlabComponent, AddalcoholtechnologistatlabComponent, ViewalcoholtechnologistatlabComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlcoholtechnologistatlabRoutingModule
  ]
})
export class AlcoholtechnologistatlabModule { }
