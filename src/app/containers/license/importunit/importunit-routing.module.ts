import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportunitComponent } from './importunit.component';
import { ViewimportunitComponent } from './viewimportunit/viewimportunit.component';

const routes: Routes = [
  { path: 'add', component: ImportunitComponent },
  { path: 'view', component: ViewimportunitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportunitRoutingModule { }
