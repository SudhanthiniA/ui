import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReselectionComponent } from './reselection.component';


const routes: Routes = [
  { path: 'list', component: ReselectionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReselectionRoutingModule { }
