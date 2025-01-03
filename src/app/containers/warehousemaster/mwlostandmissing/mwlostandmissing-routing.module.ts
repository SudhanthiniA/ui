import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwlostandmissingComponent } from './mwlostandmissing.component';
import { ViewmwlostandmissingComponent } from './viewmwlostandmissing/viewmwlostandmissing.component';


const routes: Routes = [
  { path: 'list', component: MwlostandmissingComponent },
  { path: 'view', component: ViewmwlostandmissingComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwlostandmissingRoutingModule { }
