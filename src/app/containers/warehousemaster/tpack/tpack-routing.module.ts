import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpackComponent } from './tpack.component';
import { AddtpackComponent } from './addtpack/addtpack.component';
import { ViewtpackComponent } from './viewtpack/viewtpack.component';



const routes: Routes = [
  { path: 'list', component: TpackComponent },
  { path: 'add', component: AddtpackComponent },
  { path: 'view', component: ViewtpackComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TpackRoutingModule { }
