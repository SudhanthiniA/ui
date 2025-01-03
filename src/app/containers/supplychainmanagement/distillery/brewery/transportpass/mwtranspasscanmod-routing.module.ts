import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwtranspasscanmodComponent } from './mwtranspasscanmod.component';
import { AddmwtranspasscanmodComponent } from './addmwtranspasscanmod/addmwtranspasscanmod.component';
import { ViewmwtranspasscanmodComponent } from './viewmwtranspasscanmod/viewmwtranspasscanmod.component';

const routes: Routes = [
  { path: 'list', component: MwtranspasscanmodComponent },
  { path: 'add', component: AddmwtranspasscanmodComponent },
  { path: 'view', component: ViewmwtranspasscanmodComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwtranspasscanmodRoutingModule { }
