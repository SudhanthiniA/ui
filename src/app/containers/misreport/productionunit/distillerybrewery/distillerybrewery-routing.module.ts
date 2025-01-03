import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistillerybreweryComponent } from './distillerybrewery.component';

const routes: Routes = [
  { path: 'list', component: DistillerybreweryComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistillerybreweryRoutingModule { }
