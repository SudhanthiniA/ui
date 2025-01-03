import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state.component';
import { AddStateComponent } from './add-state/add-state.component';
import { ViewStateComponent } from './view-state/view-state.component';
const routes: Routes = [
  { path: 'list', component: StateComponent },
  { path: 'add', component: AddStateComponent },
  { path: 'edit/:id', component: AddStateComponent },
  { path: 'view', component: ViewStateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
