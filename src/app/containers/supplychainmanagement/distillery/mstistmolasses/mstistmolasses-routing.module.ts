import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MstistmolassesComponent } from './mstistmolasses.component';
import { AddmstistmolassesComponent } from './addmstistmolasses/addmstistmolasses.component';
import { ViewmstistmolassesComponent } from './viewmstistmolasses/viewmstistmolasses.component';

const routes: Routes = [
  {
    path : 'list',
    component : MstistmolassesComponent
  },
  {
    path: 'add',
    component : AddmstistmolassesComponent
  },
  {
    path: 'view',
    component : ViewmstistmolassesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MstistmolassesRoutingModule { }
