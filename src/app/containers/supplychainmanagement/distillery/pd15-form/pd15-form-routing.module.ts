import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd15FormComponent } from './pd15-form.component';
import { Addpd15FormComponent } from './addpd15-form/addpd15-form.component';
import { Viewpd15FormComponent } from './viewpd15-form/viewpd15-form.component';

const routes: Routes = [
  { path: 'list', component: Pd15FormComponent },
  { path: 'add', component: Addpd15FormComponent },
   { path: 'view', component: Viewpd15FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd15FormRoutingModule { }
