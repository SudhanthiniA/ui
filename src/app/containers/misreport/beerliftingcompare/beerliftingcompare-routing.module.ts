import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerliftingcompareComponent } from './beerliftingcompare.component';

const routes: Routes = [
  { path: 'list', component: BeerliftingcompareComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerliftingcompareRoutingModule { }
