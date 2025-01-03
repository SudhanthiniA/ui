import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaulkComponent } from './taulk.component';
import { AddTaulkComponent } from './add-taulk/add-taulk.component';
import { ViewTaulkComponent } from './view-taulk/view-taulk.component';
const routes: Routes = [
  {
    path: 'list',
    component: TaulkComponent
  },
  {
    path: 'add',
    component: AddTaulkComponent
  },
  {
    path: 'edit/:id',
    component: AddTaulkComponent
  },
  {
    path: 'view/:id',
    component: ViewTaulkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaulkRoutingModule { }
