import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TankmaintainanceComponent } from './tankmaintainance.component';
import { TankmaintainanceviewComponent } from './tankmaintainanceview/tankmaintainanceview.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path : 'list',
    component : TankmaintainanceComponent
  },
  {
    path : 'add',
    component : AddComponent
  },
  {
    path: 'edit/:Id',
    component: TankmaintainanceComponent
  },
  {
    path: 'view',
    component: TankmaintainanceviewComponent
  },
  {
    path: 'preview',
    component: TankmaintainanceviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankmaintainanceRoutingModule { }
