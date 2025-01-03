import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenderComponent } from './gender.component';
import { AddeditgenderComponent } from './addeditgender/addeditgender.component';
import { ViewgenderComponent } from './viewgender/viewgender.component';

const routes: Routes = [
  { path: 'list', component: GenderComponent },
  { path: 'add', component: AddeditgenderComponent },
  { path: 'edit/:id', component: AddeditgenderComponent },
  { path: 'view/:id', component: ViewgenderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenderRoutingModule { }
