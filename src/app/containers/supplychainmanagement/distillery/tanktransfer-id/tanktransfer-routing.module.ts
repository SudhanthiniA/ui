import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AddComponent } from '../blendingprocess/add/add.component';
import { TanktransferComponent } from './tanktransfer.component';
import { TanktransferviewComponent } from './tanktransferview/tanktransferview.component';
import { AddComponent } from './add/add.component'


const routes: Routes = [
  {
    path : 'list',
    component : TanktransferComponent
  },
  {
    path : 'view',
    component : TanktransferviewComponent
  },
  {
    path : 'preview',
    component : TanktransferviewComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path : 'edit/:Id',
    component : AddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TanktransferRoutingModule { }
