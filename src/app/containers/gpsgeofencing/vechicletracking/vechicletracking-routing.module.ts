import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VechicletrackingComponent } from './vechicletracking.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

  {
    path: 'list',
    component: VechicletrackingComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'view',
    component: ViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViolationtrackvehicleRoutingModule { }
