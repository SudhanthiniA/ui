import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SpiritpurchasereqwithinstateComponent } from './spiritpurchasereqwithinstate.component';
import { AddComponent } from './add/add.component';
import { AddtwoComponent } from './addtwo/addtwo.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: 'list', component: SpiritpurchasereqwithinstateComponent},
  { path: 'add', component: AddComponent},
  { path: 'addtwo', component: AddtwoComponent},
  {path: 'view', component: ViewComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpiritpurchasereqwithinstateRoutingModule { }
