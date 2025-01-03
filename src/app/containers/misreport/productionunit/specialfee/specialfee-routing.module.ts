import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialfeeComponent } from './specialfee.component';

const routes: Routes = [
  { path: 'list', component: SpecialfeeComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialfeeRoutingModule { }
