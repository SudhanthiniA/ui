import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TanktransferComponent } from './tanktransfer.component';
import { TanktransferviewComponent } from './tanktransferview/tanktransferview.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path : 'list',
    component : TanktransferComponent
  },
  {
    path : 'view/:Id',
    component : TanktransferviewComponent
  },
  {
    path : 'add',
    component : AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TanktransferRoutingModule { }
