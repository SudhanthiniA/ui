import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { TypeofusersComponent } from './typeofusers/typeofusers.component';


const routes: Routes = [
  { path: 'list', component:ListComponent  },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'typeofusers', component: TypeofusersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrievancestatusRoutingModule { }
