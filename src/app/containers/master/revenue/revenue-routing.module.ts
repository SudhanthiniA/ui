import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevenueComponent } from './revenue.component';
import { AddeditrevenueComponent } from './addeditrevenue/addeditrevenue.component';
import { ViewrevenueComponent } from './viewrevenue/viewrevenue.component';

const routes: Routes = [
  { path: 'list', component: RevenueComponent },
  { path: 'add', component: AddeditrevenueComponent },
  { path: 'edit/:id', component: AddeditrevenueComponent },
  { path: 'view/:id', component: ViewrevenueComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueRoutingModule { }
