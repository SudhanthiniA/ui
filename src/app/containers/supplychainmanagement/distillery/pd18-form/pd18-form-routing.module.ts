import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd18FormComponent } from './pd18-form.component';
import { Addpd18FormComponent } from './addpd18-form/addpd18-form.component';
import { Viewpd18FormComponent } from './viewpd18-form/viewpd18-form.component';

const routes: Routes = [
  { path: 'list', component: Pd18FormComponent },
{
  path : 'view',
  component : Viewpd18FormComponent
},
{
  path : 'add',
  component : Addpd18FormComponent
},
{
  path : 'edit/:id',
  component : Addpd18FormComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd18FormRoutingModule { }
