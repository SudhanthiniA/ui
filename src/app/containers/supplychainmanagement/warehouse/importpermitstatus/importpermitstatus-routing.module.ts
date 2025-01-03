import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportpermitstatusComponent } from './importpermitstatus.component';
import { AddimportpermitstatusComponent } from './addimportpermitstatus/addimportpermitstatus.component';
import { ViewimportpermitstatusComponent } from './viewimportpermitstatus/viewimportpermitstatus.component';

const routes: Routes = [
  { path: 'list', component: ImportpermitstatusComponent },
  { path: 'add', component: AddimportpermitstatusComponent },
  { path: 'edit/:id', component: AddimportpermitstatusComponent },
  { path: 'view/:id', component: ViewimportpermitstatusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitstatusRoutingModule { }
