import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd24PartwiseissuanceComponent } from './pd24-partwiseissuance.component';
import { ViewPd24Component } from './view-pd24/view-pd24.component';
import { AddEditPd24Component } from './add-edit-pd24/add-edit-pd24.component';

const routes: Routes = [{ path: 'list', component: Pd24PartwiseissuanceComponent },
{ path: 'view/:id', component: ViewPd24Component },
{ path: 'add', component: AddEditPd24Component },
{ path: 'edit/:id', component: AddEditPd24Component },
{ path: 'preview', component: ViewPd24Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd24PartwiseissuanceRoutingModule { }
