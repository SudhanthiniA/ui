import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd10formComponent } from './pd10form.component';
import { Addpd10formComponent } from './addpd10form/addpd10form.component';
import { Viewpd10formComponent } from './viewpd10form/viewpd10form.component';


const routes: Routes = [
  { path: 'list', component: Pd10formComponent },
  { path: 'add', component: Addpd10formComponent },
  { path: 'view/:id', component: Viewpd10formComponent },
  { path: 'preview', component: Viewpd10formComponent },
  { path: 'edit/:id', component: Addpd10formComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd10formRoutingModule { }
