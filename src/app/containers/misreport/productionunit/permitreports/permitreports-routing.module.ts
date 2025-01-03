import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermitreportsComponent } from './permitreports.component';

const routes: Routes = [
  { path: 'list', component: PermitreportsComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermitreportsRoutingModule { }
