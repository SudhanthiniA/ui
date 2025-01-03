import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateofmattermasterComponent } from './stateofmattermaster.component';
import { AddstateofmattermasterComponent } from './addstateofmattermaster/addstateofmattermaster.component';
import { ViewstateofmattermasterComponent } from './viewstateofmattermaster/viewstateofmattermaster.component';

const routes: Routes = [
  { path: 'list', component: StateofmattermasterComponent },
  { path: 'add', component: AddstateofmattermasterComponent },
  { path: 'view', component: ViewstateofmattermasterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateofmattermasterRoutingModule { }
