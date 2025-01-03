import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonregisterbrandforoverseasComponent } from './nonregisterbrandforoverseas.Component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: 'list',component: NonregisterbrandforoverseasComponent},
    {
      path: 'add',component: AddComponent
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonregisterbrandforoverseasRoutingModule { }
