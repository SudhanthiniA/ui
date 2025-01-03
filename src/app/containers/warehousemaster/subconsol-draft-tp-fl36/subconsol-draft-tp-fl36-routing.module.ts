import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubconsolDraftTpFl36Component } from './subconsol-draft-tp-fl36.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DeoapprovalComponent } from './deoapproval/deoapproval.component';
import { DeocancelComponent } from './deocancel/deocancel.component';

const routes: Routes = [
  { path: 'list', component: SubconsolDraftTpFl36Component },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'deoapproval', component: DeoapprovalComponent },
  { path: 'deocancel', component: DeocancelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubconsolDraftTpFl36RoutingModule { }
