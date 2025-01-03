import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';



const routes: Routes = [
  {  
    path: 'list',
    component: ListComponent
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
export class IndentraiseRoutingModule { }
