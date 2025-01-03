import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ApplicationforpermitmethylalcohlComponent } from './applicationforpermitmethylalcohl.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'list',
    component: ApplicationforpermitmethylalcohlComponent
  },
  
  {
    path: 'add',
    component: AddComponent
  },
  
  {
    path: 'view/:Id',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationforpermitmethylalcohlRoutingModule { }
