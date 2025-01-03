import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenalityonundefinedsubjectComponent } from './penalityonundefinedsubject.component';
import { AddpenalityonundefinedsubjectComponent } from './addpenalityonundefinedsubject/addpenalityonundefinedsubject.component';
import { ViewpenalityonundefinedsubjectComponent } from './viewpenalityonundefinedsubject/viewpenalityonundefinedsubject.component';
import { EditpenalityonundefinedsubjectComponent } from './editpenalityonundefinedsubject/editpenalityonundefinedsubject.component';

const routes: Routes = [
  {
    path: 'list',
    component: PenalityonundefinedsubjectComponent
  },
  {
    path: 'add',
    component: AddpenalityonundefinedsubjectComponent
  },
  {
    path: 'edit',
    component: EditpenalityonundefinedsubjectComponent
  },
  
  {
    path: 'view',
    component: ViewpenalityonundefinedsubjectComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenalityonundefinedsubjectRoutingModule { }
