import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountpurchaserComponent } from './accountpurchaser.component';
import { ViewpurchaserComponent } from './viewpurchaser/viewpurchaser.component';
import { AddpurchaserComponent } from './addpurchaser/addpurchaser.component';

const routes: Routes = [
  {
    path: 'list',
    component: AccountpurchaserComponent 
  },
  {
    path: 'add',
    component: AddpurchaserComponent
  },
  {
    path: 'view',
    component: ViewpurchaserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountpurchaserRoutingModule { }
