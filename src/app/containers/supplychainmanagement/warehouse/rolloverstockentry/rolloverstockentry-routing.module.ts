import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolloverstockentryComponent } from './rolloverstockentry.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : RolloverstockentryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolloverstockentryRoutingModule { }
