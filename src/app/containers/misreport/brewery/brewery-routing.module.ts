import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Breweryform3Component } from './breweryform3/breweryform3.component';
import { Breweryform2Component } from './breweryform2/breweryform2.component';
import { Breweryform4Component } from './breweryform4/breweryform4.component';
import { Breweryform1Component } from './breweryform1/breweryform1.component';
import { Breweryform5Component } from './breweryform5/breweryform5.component';


const routes: Routes = [
  { path: 'breweryform1', component: Breweryform1Component },
  { path: 'breweryform3', component: Breweryform3Component },
  { path: 'breweryform5', component: Breweryform5Component },
  { path: 'breweryform2', component: Breweryform2Component },
  { path: 'breweryform4', component: Breweryform4Component }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreweryRoutingModule { }
