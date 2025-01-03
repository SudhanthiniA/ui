import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd21FormComponent } from './pd21-form.component';
import { Addpd21FormComponent } from './addpd21-form/addpd21-form.component';
import { Viewpd21FormComponent } from './viewpd21-form/viewpd21-form.component';

const routes: Routes = [
  { path: 'list', component: Pd21FormComponent },
{
  path : 'add',
  component : Addpd21FormComponent
},
{
  path : 'view',
  component : Viewpd21FormComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd21FormRoutingModule { }
