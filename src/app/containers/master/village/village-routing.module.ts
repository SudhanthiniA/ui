import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillageComponent } from './village.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: VillageComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillageRoutingModule { }
