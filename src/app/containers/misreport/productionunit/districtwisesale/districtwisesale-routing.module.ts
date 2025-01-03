import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictwisesaleComponent } from './districtwisesale.component';

const routes: Routes = [
  { path: 'list', component: DistrictwisesaleComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictwisesaleRoutingModule { }
