import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabnameComponent } from './labname.component';
import { AddlabnameComponent } from './addlabname/addlabname.component';
import { ViewlabnameComponent } from './viewlabname/viewlabname.component';

const routes: Routes = [
  { path: 'list', component: LabnameComponent },
  { path: 'add', component: AddlabnameComponent },
  { path: 'view', component: ViewlabnameComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabnameRoutingModule { }
