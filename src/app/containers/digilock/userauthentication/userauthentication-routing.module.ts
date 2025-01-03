import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserauthenticationComponent } from './userauthentication.component';
import { AdduserauthenticationComponent } from './adduserauthentication/adduserauthentication.component';
import { ViewuserauthenticationComponent } from './viewuserauthentication/viewuserauthentication.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserauthenticationComponent
  },
  {
    path: 'add',
    component: AdduserauthenticationComponent
  },
  {
    path: 'view',
    component: ViewuserauthenticationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserauthenticationRoutingModule { }
