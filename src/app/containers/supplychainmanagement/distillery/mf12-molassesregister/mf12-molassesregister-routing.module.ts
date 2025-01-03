import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditMf12molassesregisterComponent } from './addedit-mf12molassesregister/addedit-mf12molassesregister.component';

import { Mf12MolassesregisterComponent } from './mf12-molassesregister.component';
import { ViewMf12molassesregisterComponent } from './view-mf12molassesregister/view-mf12molassesregister.component';

const routes: Routes = [
  { path: 'list', component: Mf12MolassesregisterComponent },
  { path: 'add', component: AddeditMf12molassesregisterComponent },
  { path: 'edit/:id', component: AddeditMf12molassesregisterComponent },
  { path: 'preview', component: ViewMf12molassesregisterComponent },
  { path: 'view/:id', component: ViewMf12molassesregisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf12MolassesregisterRoutingModule { }
