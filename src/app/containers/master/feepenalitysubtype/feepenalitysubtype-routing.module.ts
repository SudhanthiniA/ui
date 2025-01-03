import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeepenalitysubtypeComponent } from './feepenalitysubtype.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: FeepenalitysubtypeComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeepenalitysubtypeRoutingModule { }
