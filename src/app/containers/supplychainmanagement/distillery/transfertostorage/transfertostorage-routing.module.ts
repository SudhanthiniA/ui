import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransfertostorageComponent } from './transfertostorage.component';
import { AddtransfertostorageComponent } from './addtransfertostorage/addtransfertostorage.component';
import { ViewtransfertostorageComponent } from './viewtransfertostorage/viewtransfertostorage.component';


const routes: Routes = [
  {
    path : 'list',
    component : TransfertostorageComponent
  },
  {
    path: 'add',
    component : AddtransfertostorageComponent
  },
  {
    path : 'view',
    component : ViewtransfertostorageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfertostorageRoutingModule { }
