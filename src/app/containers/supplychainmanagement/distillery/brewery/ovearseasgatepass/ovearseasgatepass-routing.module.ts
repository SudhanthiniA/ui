
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvearseasgatepassComponent } from './ovearseasgatepass.component';
import { ViewovearseasgatepassComponent } from './viewovearseasgatepass/viewovearseasgatepass.component';
import { AddovearseasgatepassComponent } from './addovearseasgatepass/addovearseasgatepass.component';

const routes: Routes = [
  {
    path : 'add',
    component : AddovearseasgatepassComponent
  },
  {
    path : 'view',
    component : ViewovearseasgatepassComponent
  },
  {
    path : 'list',
    component : OvearseasgatepassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OvearseasgatepassRoutingModule { }
