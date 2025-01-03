import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RollovernonrecognisedComponent } from './rollovernonrecognised.component';
import { AddrollovernonrecognisedComponent } from './addrollovernonrecognised/addrollovernonrecognised.component';

const routes: Routes = [
  {
    path : 'list',
    component : RollovernonrecognisedComponent
  },
  {
    path : 'add',
    component : AddrollovernonrecognisedComponent
  },
  {
    path : 'edit/:id',
    component : AddrollovernonrecognisedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RollovernonrecognisedRoutingModule { }
