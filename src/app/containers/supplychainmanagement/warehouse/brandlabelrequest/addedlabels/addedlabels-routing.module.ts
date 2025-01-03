import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddedlabelsComponent } from './addedlabels.component';

const routes: Routes = [
  { path: 'add', component: AddedlabelsComponent }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddedlabelsRoutingModule { }
