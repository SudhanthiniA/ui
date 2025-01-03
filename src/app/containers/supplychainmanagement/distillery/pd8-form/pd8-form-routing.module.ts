import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Pd8FormComponent } from './pd8-form.component';
import { Addpd8FormComponent } from './addpd8-form/addpd8-form.component';
import { Viewpd8FormComponent } from './viewpd8-form/viewpd8-form.component';

const routes: Routes = [
  {
    path: 'list',
    component: Pd8FormComponent
 },
  {
  path: 'add',
  component: Addpd8FormComponent
},
{
  path: 'edit/:id',
  component: Addpd8FormComponent
},
{
path: 'view/:id',
component: Viewpd8FormComponent
},
{
  path: 'preview',
  component: Viewpd8FormComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd8FormRoutingModule { }
