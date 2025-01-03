import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesnameComponent } from './accessoriesname.component';
import { AddaccessoriesnameComponent } from './adddaccessoriesname/accessoriesname.component';
import { ViewaccessoriesnameComponent } from './viewaccessoriesname/accessoriesname.component';

const routes: Routes = [
  {
    path: 'list',
    component: AccessoriesnameComponent
  },
  {
    path: 'add',
    component: AddaccessoriesnameComponent
  },
  {
    path: 'view',
    component: ViewaccessoriesnameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessoriesnameRoutingModule { }
