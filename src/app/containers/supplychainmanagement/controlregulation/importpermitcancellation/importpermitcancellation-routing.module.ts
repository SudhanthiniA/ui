import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportpermitcancellationComponent } from './importpermitcancellation.component';
import { ViewimportpermitnewupComponent } from './viewimportpermitnewup/viewimportpermitnewup.component';

const routes: Routes = [
  { path: 'add', component: ImportpermitcancellationComponent },
  { path: 'view', component: ViewimportpermitnewupComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitcancellationRoutingModule { }
