import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd9Component } from './pd9.component';
import { Addpd9Component } from './addpd9/addpd9.component';
import { Viewpd9Component } from './viewpd9/viewpd9.component';

const routes: Routes = [
  { path: 'list', component: Pd9Component },
  { path: 'add', component: Addpd9Component },
   { path: 'edit/:id', component: Addpd9Component },
  { path: 'view/:id', component: Viewpd9Component },
  { path: 'preview', component: Viewpd9Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd9RoutingModule { }
