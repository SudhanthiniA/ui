import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pd6OthersComponent } from './pd6-others.component';
import { Viewpd6Component } from './viewpd6/viewpd6.component';
import { Addeditpd6Component } from './addeditpd6/addeditpd6.component';


const routes: Routes = [
  { path: 'list', component: Pd6OthersComponent },
  { path: 'add', component: Addeditpd6Component },
  { path: 'edit/:id', component: Addeditpd6Component },
  { path: 'view/:id', component: Viewpd6Component },
  { path: 'preview', component: Viewpd6Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd6OthersRoutingModule { }
