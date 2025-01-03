import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditMolassesComponent } from './addedit-molasses/addedit-molasses.component';

import { MolassesComponent } from './molasses.component';
import { ViewMolassesComponent } from './view-molasses/view-molasses.component';

const routes: Routes = [
  { path: 'list', component: MolassesComponent },
  { path: 'add', component: AddeditMolassesComponent },
  { path: 'edit/:Id', component: AddeditMolassesComponent },
  { path: 'view/:Id', component: ViewMolassesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MolassesRoutingModule { }
