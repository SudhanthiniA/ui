import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranspassgenerationnewComponent } from './transpassgenerationnew.component';
import { AddtranspassgenerationnewComponent } from './addtranspassgenerationnew/addtranspassgenerationnew.component';
import { ViewtranspassgenerationnewComponent } from './viewtranspassgenerationnew/viewtranspassgenerationnew.component';
import { CancelmodifypassComponent } from './cancelmodifypass/cancelmodifypass.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: TranspassgenerationnewComponent
  },
  {
    path: 'add',
    component: AddtranspassgenerationnewComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'view',
    component: ViewtranspassgenerationnewComponent
  },
  {
    path: 'cancelmodify',
    component: CancelmodifypassComponent
  },
  {
    path: 'list/:status',
    component: TranspassgenerationnewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranspassgenerationnewRoutingModule { }
