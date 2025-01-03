import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllotmentofmolassesComponent } from './allotmentofmolasses.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: 'list', component: AllotmentofmolassesComponent},
  {path: 'add', component: AddComponent},
  {path: 'view', component: ViewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllotmentofmolassesRoutingModule { }
