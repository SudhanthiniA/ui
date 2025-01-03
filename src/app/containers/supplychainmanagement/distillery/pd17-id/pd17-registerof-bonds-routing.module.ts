import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPd17Component } from './add-pd17/add-pd17.component';

import { Pd17RegisterofBondsComponent } from './pd17-registerof-bonds.component';
import { ViewPd17Component } from './view-pd17/view-pd17.component';


const routes: Routes = [
  { path: 'list', component: Pd17RegisterofBondsComponent},
  { path: 'view', component: ViewPd17Component},
  { path: 'add', component: AddPd17Component},
  { path: 'edit/:id', component: AddPd17Component},
  { path: 'preview', component: ViewPd17Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd17RegisterofBondsRoutingModule { }
