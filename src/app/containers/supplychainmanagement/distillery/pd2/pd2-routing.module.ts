import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd2Component } from './pd2.component';
import { Addpd2Component } from './addpd2/addpd2.component';
import { Viewpd2Component } from './viewpd2/viewpd2.component';

const routes: Routes = [
  { path: 'list', component: Pd2Component },
{
  path : 'view/:id',
  component : Viewpd2Component
},
{
  path : 'edit/:id',
  component : Addpd2Component
},
{
  path : 'add',
  component : Addpd2Component
},
{
  path: 'nonregisterbrandpd2',
  loadChildren: () => import('./nonregisterbrandpd2/nonregisterbrandpd2.module').then(m => m.Nonregisterbrandpd2Module)
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd2RoutingModule { }
