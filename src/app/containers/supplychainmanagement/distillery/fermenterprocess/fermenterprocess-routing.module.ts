import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FermenterprocessComponent } from './fermenterprocess.component';
import { AddfermenterprocessComponent } from './addfermenterprocess/addfermenterprocess.component';
import { ViewfermenterprocessComponent } from './viewfermenterprocess/viewfermenterprocess.component';


const routes: Routes = [
  {
    path : 'list',
    component : FermenterprocessComponent
  },
  {
    path: 'add',
    component : AddfermenterprocessComponent
  },
  {
    path: 'view',
    component : ViewfermenterprocessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FermenterprocessRoutingModule { }
