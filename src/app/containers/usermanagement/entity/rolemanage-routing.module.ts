import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolemanageComponent } from './rolemanage.component';
import { AddrolemanageComponent } from './addrolemanage/addrolemanage.component';
import { ViewrolemanageComponent } from './viewrolemanage/viewrolemanage.component';

const routes: Routes = [
  {
    path : 'list',
    component : RolemanageComponent
  },
  {
    path : 'add',
    component : AddrolemanageComponent
  },
  {
    path : 'edit/:Id',
    component : AddrolemanageComponent
  },
  {
    path : 'view',
    component : ViewrolemanageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolemanageRoutingModule { }
