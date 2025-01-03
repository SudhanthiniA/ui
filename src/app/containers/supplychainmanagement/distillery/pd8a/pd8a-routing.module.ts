import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd8aComponent } from './pd8a.component';
import { Addpd8aComponent } from './addpd8a/addpd8a.component';
import { Viewpd8aComponent } from './viewpd8a/viewpd8a.component';

const routes: Routes = [
  { path: 'list', component: Pd8aComponent },
{
  path : 'view',
  component : Viewpd8aComponent
},
{
  path : 'add',
  component : Addpd8aComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd8aRoutingModule { }
