import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExportorderdispatchComponent } from './exportorderdispatch/exportorderdispatch.component';
import { DistilleryeoireportComponent } from './distilleryeoireport/distilleryeoireport.component';

const routes: Routes = [
  { path: 'exportorderdispatch', component: ExportorderdispatchComponent },
  { path: 'distilleryeoireport', component: DistilleryeoireportComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportRoutingModule { }
