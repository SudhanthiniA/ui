import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd29FormComponent } from './pd29-form.component';
import { Addpd29FormComponent } from './addpd29-form/addpd29-form.component';
import { Viewpd29FormComponent } from './viewpd29-form/viewpd29-form.component';

const routes: Routes = [
  {
    path: 'list',
    component: Pd29FormComponent
 },
  {
  path: 'add',
  component: Addpd29FormComponent
},
{
path: 'view',
component: Viewpd29FormComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd29FormRoutingModule { }
