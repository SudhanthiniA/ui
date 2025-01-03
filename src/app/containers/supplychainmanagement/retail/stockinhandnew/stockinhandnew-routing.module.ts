import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinhandnewComponent } from './stockinhandnew.component';
import { ViewstockinhandnewComponent } from './viewstockinhandnew/viewstockinhandnew.component';

const routes: Routes = [
  { path: 'list', component: StockinhandnewComponent },
  { path: 'view', component: ViewstockinhandnewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinhandnewRoutingModule { }
