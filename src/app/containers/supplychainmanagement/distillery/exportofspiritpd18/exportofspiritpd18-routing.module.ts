import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exportofspiritpd18Component } from './exportofspiritpd18.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [

  {
    path : 'list',
    component : Exportofspiritpd18Component
  },
  {
    path: 'view',
    component : ViewComponent
  },
  {
    path : 'add',
    component : AddComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exportofspiritpd18RoutingModule { }
