import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mf5Part3Component } from './mf5-part3.component';
import { Addeditmf5Part3Component } from './addeditmf5-part3/addeditmf5-part3.component';
import { Viewmf5Part3Component } from './viewmf5-part3/viewmf5-part3.component';


const routes: Routes = [

  {
    path : 'list',
    component : Mf5Part3Component
  },
  {
    path : 'add',
    component : Addeditmf5Part3Component
  },
  {
    path : 'edit/:Id',
    component : Addeditmf5Part3Component
  },
  {   
    path : 'view/:Id',
    component : Viewmf5Part3Component
  },
  {
    path : 'preview',
    component : Viewmf5Part3Component
  },
  {
    path: 'inspectionpart3',
    loadChildren: () => import('./inspectionpart3/inspectionpart3.module').then(m => m.Inspectionpart3Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf5Part3RoutingModule { }
