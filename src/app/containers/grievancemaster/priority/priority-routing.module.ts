import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriorityComponent } from './priority.component';
import { AddpriorityComponent } from './addpriority/addpriority.component';
import { ViewpriorityComponent } from './viewpriority/viewpriority.component';

const routes: Routes = [
  { path: 'list', component: PriorityComponent },
  { path: 'add', component: AddpriorityComponent },
  { path: 'view', component: ViewpriorityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriorityRoutingModule { }
