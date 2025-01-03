import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd18IdComponent } from './pd18-id.component';
import { Addpd18IdComponent } from './addpd18-id/addpd18-id.component';
import { Viewpd18IdComponent } from './viewpd18-id/viewpd18-id.component';

const routes: Routes = [
  { path: 'list', component: Pd18IdComponent },
{
  path : 'view',
  component : Viewpd18IdComponent
},
{
  path : 'add',
  component : Addpd18IdComponent
},
// {
//   path : 'edit/:id',
//   component : AddPd18IdComponent
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd18IdRoutingModule { }
