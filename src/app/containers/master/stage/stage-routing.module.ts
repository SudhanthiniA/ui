import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageComponent } from './stage.component';
import { AddeditstageComponent } from './addeditstage/addeditstage.component';
import { ViewstageComponent } from './viewstage/viewstage.component';

const routes: Routes = [
  { path: 'list', component: StageComponent },
  { path: 'add', component: AddeditstageComponent },
  { path: 'edit/:id', component: AddeditstageComponent },
  { path: 'view', component: ViewstageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageRoutingModule { }
