import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AcceptofspiritpurchasereqwithinstateComponent } from './acceptofspiritpurchasereqwithinstate.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: 'list', component: AcceptofspiritpurchasereqwithinstateComponent},
  {path: 'view', component: ViewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceptofspiritpurchasereqwithinstateRoutingModule { }
