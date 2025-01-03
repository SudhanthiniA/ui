import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd12formComponent } from './pd12form.component';
import { Addpd12formComponent } from './addpd12form/addpd12form.component';
import { Viewpd12formComponent } from './viewpd12form/viewpd12form.component';


const routes: Routes = [
  { path: 'list', component: Pd12formComponent },
  { path: 'add', component: Addpd12formComponent },
  { path: 'view', component: Viewpd12formComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd12formRoutingModule { }
