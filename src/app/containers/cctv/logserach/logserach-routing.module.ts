import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogserachComponent } from './logserach.component';

const routes: Routes = [
  {
    path: 'list',
    component: LogserachComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogserachRoutingModule { }
