import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentapprovalComponent } from './indentapproval.component';
import { ViewnewindentComponent } from './viewnewindent/viewnewindent.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [ 
  {
    path : 'list',
    component : IndentapprovalComponent
  },
  {
    path : 'view',
    component : ViewnewindentComponent
  },
  {
    path : 'edit',
    component : EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentapprovalRoutingModule { }
