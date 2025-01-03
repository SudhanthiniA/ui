import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportpermitcancelComponent } from './importpermitcancel.component';
import { AddimportpermitcancelComponent } from './addimportpermitcancel/addimportpermitcancel.component';
import { ViewimportpermitcancelComponent } from './viewimportpermitcancel/viewimportpermitcancel.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : ImportpermitcancelComponent
  },
  {
    path : 'add',
    component : AddimportpermitcancelComponent
  },
  {
    path : 'view',
    component : ViewimportpermitcancelComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitcancelRoutingModule { }
