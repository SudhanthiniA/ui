import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditMolassestypeComponent } from './addedit-molassestype/addedit-molassestype.component';

import { MolassesTypeComponent } from './molasses-type.component';
import { ViewMolassestypeComponent } from './view-molassestype/view-molassestype.component';

const routes: Routes = [
  { path: 'list', component: MolassesTypeComponent },
  { path: 'add', component: AddeditMolassestypeComponent },
  { path: 'edit/:Id', component: AddeditMolassestypeComponent },
  { path: 'view/:Id', component: ViewMolassestypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MolassesTypeRoutingModule { }
