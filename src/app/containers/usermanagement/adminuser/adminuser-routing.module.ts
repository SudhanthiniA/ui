import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminuserComponent } from './adminuser.component';
import { AddadminuserComponent } from './addadminuser/addadminuser.component';
import { ViewadminuserComponent } from './viewadminuser/viewadminuser.component';

const routes: Routes = [
  {
    path : 'list',
    component : AdminuserComponent
  },
  {
    path : 'add',
    component : AddadminuserComponent
  },
  {
    path : 'view',
    component : ViewadminuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminuserRoutingModule { }
