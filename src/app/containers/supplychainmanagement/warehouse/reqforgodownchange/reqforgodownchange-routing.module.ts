import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReqforgodownchangeComponent } from './reqforgodownchange.component';


const routes: Routes = [
  { path: 'add', component: ReqforgodownchangeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReqforgodownchangeRoutingModule { }
