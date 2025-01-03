import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WholesalemonocartontransportpassdraftComponent } from './wholesalemonocartontransportpassdraft.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: 'list', component: WholesalemonocartontransportpassdraftComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholesalemonocartontransportpassdraftRoutingModule { }
