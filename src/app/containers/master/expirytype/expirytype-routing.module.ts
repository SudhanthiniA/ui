import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { ExpirytypeComponent } from './expirytype.component';
import { AddexpirytypeComponent } from './addexpirytype/addexpirytype.component';
import { ViewexpirytypeComponent } from './viewexpirytype/viewexpirytype.component';


const routes: Routes = [
  {
    path: 'list',
    component: ExpirytypeComponent
  },
  {
    path: 'add',
    component: AddexpirytypeComponent
  },
  {
    path : 'view',
    component: ViewexpirytypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpirytypeRoutingModule { }
