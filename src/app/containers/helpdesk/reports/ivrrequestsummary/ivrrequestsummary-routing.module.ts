import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvrrequestsummaryComponent } from './ivrrequestsummary.component';


const routes: Routes = [
  { path: '', component: IvrrequestsummaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IvrrequestsummaryRoutingModule { }
