import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportpermitComponent } from './importpermit.component';
import { AddImportpermitComponent } from './add-importpermit/add-importpermit.component';
import { ViewImportpermitComponent } from './view-importpermit/view-importpermit.component';

const routes: Routes = [
  { path: 'list', component: ImportpermitComponent },
  { path: 'add', component: AddImportpermitComponent },
  { path: 'view/:id', component: ViewImportpermitComponent },
  { path: 'edit/:id', component: AddImportpermitComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitRoutingModule { }
