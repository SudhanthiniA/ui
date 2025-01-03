import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EalrequestmappedComponent } from './ealrequestmapped.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { UnmappedviewComponent } from './unmappedview/unmappedview.component';
import { UnmappedaddComponent } from './unmappedadd/unmappedadd.component';
import { DeomappedComponent } from './deomapped/deomapped.component';
import { DeounmappedComponent } from './deounmapped/deounmapped.component';

const routes: Routes = [
  { path: 'list', component: EalrequestmappedComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'unmappedadd', component: UnmappedaddComponent },
  { path: 'unmappedview', component: UnmappedviewComponent }, 
  { path: 'deomapped', component: DeomappedComponent },
  { path: 'deounmapped', component: DeounmappedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EalrequestmappedRoutingModule { }
