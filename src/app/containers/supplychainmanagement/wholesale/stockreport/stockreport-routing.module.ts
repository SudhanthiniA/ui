import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockreportComponent } from './stockreport.component';

const routes: Routes = [{ path: 'list', component: StockreportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockreportRoutingModule { }
