import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailtransferacceptanceComponent } from './retailtransferacceptance.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: 'list', component: RetailtransferacceptanceComponent },
  { path: 'view', component: ViewComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailtransferacceptanceRoutingModule { }
