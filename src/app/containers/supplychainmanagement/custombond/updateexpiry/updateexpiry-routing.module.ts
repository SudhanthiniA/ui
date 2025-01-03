import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateexpiryComponent } from './updateexpiry.component';

const routes: Routes = [
  {
    path: 'list',
    component: UpdateexpiryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateexpiryRoutingModule { }
