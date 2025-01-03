import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportliquorComponent } from './importliquor.component';

const routes: Routes = [
  {
    path : 'add',
    component : ImportliquorComponent
  }
]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ImportliquorRoutingModule { }
