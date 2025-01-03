import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportpermitnewComponent } from './importpermitnew.component';
import { AddimportpermitnewComponent } from './addimportpermitnew/addimportpermitnew.component';
import { ViewimportpermitnewComponent } from './viewimportpermitnew/viewimportpermitnew.component';
import { ImportpermitsuccessComponent } from './importpermitsuccess/importpermitsuccess.component';

const routes: Routes = [
  { path: 'list', component: ImportpermitnewComponent },
  { path: 'add', component: AddimportpermitnewComponent },
  { path: 'edit/:id', component: AddimportpermitnewComponent },
  { path: 'view/:id', component: ViewimportpermitnewComponent },
  { path: 'success', component: ImportpermitsuccessComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitnewRoutingModule { }
