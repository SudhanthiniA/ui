import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReselectionComponent } from './reselection.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { path: 'list', component: ReselectionComponent},
  { path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReselectionRoutingModule { }
