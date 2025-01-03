import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportonplanComponent } from './reportonplan.component';

const routes: Routes = [
  { path: 'list', component: ReportonplanComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportonplanRoutingModule { }
