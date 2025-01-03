import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranstoginbwstoragevatComponent } from './transtoginbwstoragevat.component';
import { AddtranstoginbwstoragevatComponent } from './addtranstoginbwstoragevat/addtranstoginbwstoragevat.component';
import { ViewtranstoginbwstoragevatComponent } from './viewtranstoginbwstoragevat/viewtranstoginbwstoragevat.component';


const routes: Routes = [
  {
    path : 'list',
    component : TranstoginbwstoragevatComponent
  },
  {
    path: 'add',
    component : AddtranstoginbwstoragevatComponent
  },
  {
    path : 'view',
    component : ViewtranstoginbwstoragevatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranstoginbwstoragevatRoutingModule { }
