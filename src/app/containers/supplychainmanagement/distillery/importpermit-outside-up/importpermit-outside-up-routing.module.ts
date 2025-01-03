import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportpermitOutsideUpComponent } from './importpermit-outside-up.component';
import { AddImportpermitComponent } from './add-importpermit/add-importpermit.component';
import { ViewImportpermitComponent } from './view-importpermit/view-importpermit.component';


const routes: Routes = [{ path: 'list', component: ImportpermitOutsideUpComponent },
{ path: 'add', component: AddImportpermitComponent },
{ path: 'edit/:id', component: AddImportpermitComponent },
{ path: 'view', component: ViewImportpermitComponent },
{ path: 'preview', component: ViewImportpermitComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitOutsideUpRoutingModule { }
