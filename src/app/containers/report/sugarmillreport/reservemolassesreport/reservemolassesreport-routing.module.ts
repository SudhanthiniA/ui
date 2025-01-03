import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservemolassesreportComponent } from './reservemolassesreport.component';

const routes: Routes = [
  {
    path : 'list',
    component : ReservemolassesreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservemolassesreportRoutingModule { }
