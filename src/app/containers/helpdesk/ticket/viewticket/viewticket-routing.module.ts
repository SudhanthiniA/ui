import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewticketComponent } from './viewticket.component';

import { ViewticketdetailsComponent } from './viewticketdetails/viewticketdetails.component';

const routes: Routes = [
  { path: '', component: ViewticketComponent },
  { path: 'viewticketdetails/:Id', component: ViewticketdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewticketRoutingModule { }
