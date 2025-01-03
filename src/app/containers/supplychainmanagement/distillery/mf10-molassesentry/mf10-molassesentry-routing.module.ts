import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AddeditMf10Component } from './addedit-mf10/addedit-mf10.component';

import { Mf10MolassesentryComponent } from './mf10-molassesentry.component';
import { ViewMf10Component } from './view-mf10/view-mf10.component';

const routes: Routes = [
  { path: 'list', component: Mf10MolassesentryComponent },
  // { path:'add',component:AddeditMf10Component},
  // { path:'edit/:id',component:AddeditMf10Component},
  { path:'view',component:ViewMf10Component},
  { path:'preview',component:ViewMf10Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf10MolassesentryRoutingModule { }
