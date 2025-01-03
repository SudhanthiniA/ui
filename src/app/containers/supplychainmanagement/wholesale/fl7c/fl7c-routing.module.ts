import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fl7cComponent } from './fl7c.component';

const routes: Routes = [
  { path: 'list', component: Fl7cComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Fl7cRoutingModule { }
