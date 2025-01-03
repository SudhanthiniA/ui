import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tariandsendhicl10aComponent } from './tariandsendhicl10a.component';
import { Viewtariandsendhicl10aComponent } from './viewtariandsendhicl10a/viewtariandsendhicl10a.component';

const routes: Routes = [
  {
    path : 'add',
    component : Tariandsendhicl10aComponent
  },
  {
    path : 'view',
    component : Viewtariandsendhicl10aComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tariandsendhicl10aRoutingModule { }
