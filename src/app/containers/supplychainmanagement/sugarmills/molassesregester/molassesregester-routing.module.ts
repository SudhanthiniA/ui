import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MolassesregesterComponent } from './molassesregester.component';
import { AddregesterComponent } from './addregester/addregester.component';
import { EditregesterComponent } from './editregester/editregester.component';


const routes: Routes = [
  {
    path: 'list',
    component: MolassesregesterComponent
  },
  {
    path: 'add',
    component: AddregesterComponent
  },
  {
    path: 'view/:Id',
    component: EditregesterComponent
  },
  {
    path: 'edit/:Id',
    component: AddregesterComponent
  },
  {
    path : 'preview',
    component : EditregesterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MolassesregesterRoutingModule { }
