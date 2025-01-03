import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddexportpermitComponent } from './addexportpermit/addexportpermit.component';
import { ViewexportpermitComponent } from './viewexportpermit/viewexportpermit.component';

import { ExportpermitComponent } from './exportpermit.component';

const routes: Routes = [{ path: 'list', component: ExportpermitComponent },
{ path: 'add', component: AddexportpermitComponent },
{ path: 'view', component: ViewexportpermitComponent },
{ path: 'list', component: ExportpermitComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportpermitRoutingModule { }





