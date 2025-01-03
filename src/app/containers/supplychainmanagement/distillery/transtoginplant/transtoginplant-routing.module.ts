import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranstoginplantComponent } from './transtoginplant.component';
import { AddtranstoginplantComponent } from './addtranstoginplant/addtranstoginplant.component';
import { ViewtranstoginplantComponent } from './viewtranstoginplant/viewtranstoginplant.component';


const routes: Routes = [
  {
    path : 'list',
    component : TranstoginplantComponent
  },
  {
    path: 'add',
    component : AddtranstoginplantComponent
  },
  {
    path : 'view',
    component : ViewtranstoginplantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranstoginplantRoutingModule { }
