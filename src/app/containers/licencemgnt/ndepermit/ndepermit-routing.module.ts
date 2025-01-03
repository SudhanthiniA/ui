import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NdepermitComponent } from './ndepermit.component';

const routes: Routes = [
  { path: 'add', component: NdepermitComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NdepermitRoutingModule { }
