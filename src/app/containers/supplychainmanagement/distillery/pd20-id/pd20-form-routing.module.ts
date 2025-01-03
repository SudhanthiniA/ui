import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd20FormComponent } from './pd20-form.component';
import { Addpd20FormComponent } from './addpd20-form/addpd20-form.component';
import { Viewpd20FormComponent } from './viewpd20-form/viewpd20-form.component';

const routes: Routes = [
  { path: 'list', component: Pd20FormComponent },
{
  path : 'view',
  component : Viewpd20FormComponent
},
{
  path : 'edit/:id',
  component : Addpd20FormComponent
},
{
  path : 'add',
  component : Addpd20FormComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd20FormRoutingModule { } 
