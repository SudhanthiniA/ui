import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegdistexpunitOutsideindiaComponent } from './regdistexpunit-outsideindia.component';
import { AddregdistexpunitOutsideindiaComponent } from './addregdistexpunit-outsideindia/addregdistexpunit-outsideindia.component';
import { ViewregdistexpunitOutsideindiaComponent } from './viewregdistexpunit-outsideindia/viewregdistexpunit-outsideindia.component';


const routes: Routes = [
  {
    path : 'list',
    component : RegdistexpunitOutsideindiaComponent
  },
  {
    path: 'view',
    component : ViewregdistexpunitOutsideindiaComponent
  },
  {
    path : 'add',
    component : AddregdistexpunitOutsideindiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegdistexpunitOutsideindiaRoutingModule { }
