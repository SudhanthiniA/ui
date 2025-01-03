import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsermanageComponent } from './usermanage.component';
import { AddusersComponent } from './addusers/addusers.component';
import { ViewusersComponent } from './viewusers/viewusers.component';


const routes: Routes = [
  {
    path : 'list',
    component : UsermanageComponent
  },
  {
    path : 'add',
    component : AddusersComponent
  },
  {
    path : 'edit/:Id',
    component : AddusersComponent
  },
  {
    path : 'view/:Id',
    component : ViewusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanageRoutingModule { }
