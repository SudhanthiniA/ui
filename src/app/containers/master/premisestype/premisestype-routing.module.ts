import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremisestypeComponent } from './premisestype.component';
import { AddpremisestypeComponent } from './addpremisestype/addpremisestype.component';
import { ViewpremisestypeComponent } from './viewpremisestype/viewpremisestype.component';


const routes: Routes = [
  {
    path: 'list',
    component: PremisestypeComponent
  },
  {
    path: 'add',
    component: AddpremisestypeComponent
  },
  {
    path : 'view',
    component : ViewpremisestypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PremisestypeRoutingModule { }
