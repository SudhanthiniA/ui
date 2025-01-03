import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { StockinhandComponent } from './stockinhand.component';
import { ViewstockinhandnewComponent } from './viewstockinhandnew/viewstockinhandnew.component';

const routes: Routes = [
  { path: 'list', component: StockinhandComponent },
  { path: 'view', component: ViewstockinhandnewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinhandRoutingModule { }
