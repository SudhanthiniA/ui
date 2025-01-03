import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state.component';
import { ViewstateComponent } from './viewstate/viewstate.component';

const routes: Routes = [
  {
    path : 'list',
    component : StateComponent
  },
  {
    path : 'view',
    component : ViewstateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
