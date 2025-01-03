import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscalatelevelComponent } from './escalatelevel.component';
import { AddescalatelevelComponent } from './addescalatelevel/addescalatelevel.component';
import { ViewescalatelevelComponent } from './viewescalatelevel/viewescalatelevel.component';

const routes: Routes = [
  { path: '', component: EscalatelevelComponent },
  { path: 'add', component: AddescalatelevelComponent },
  { path: 'view', component: ViewescalatelevelComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscalatelevelRoutingModule { }
