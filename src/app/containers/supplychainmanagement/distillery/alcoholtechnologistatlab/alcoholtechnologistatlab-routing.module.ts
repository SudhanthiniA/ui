import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlcoholtechnologistatlabComponent } from './alcoholtechnologistatlab.component';
import { AddalcoholtechnologistatlabComponent } from './addalcoholtechnologistatlab/addalcoholtechnologistatlab.component';
import { ViewalcoholtechnologistatlabComponent } from './viewalcoholtechnologistatlab/viewalcoholtechnologistatlab.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'list', component: AlcoholtechnologistatlabComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'add', component: AddalcoholtechnologistatlabComponent },
   { path: 'view', component: ViewalcoholtechnologistatlabComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlcoholtechnologistatlabRoutingModule { }
