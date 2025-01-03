import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeetypeComponent } from './feetype.component';
import { AddFeetypeComponent } from './add-feetype/add-feetype.component';
import { ViewFeetypeComponent } from './view-feetype/view-feetype.component';

const routes: Routes = [
  { path: 'list', component: FeetypeComponent },
  { path: 'add', component: AddFeetypeComponent },
  { path: 'edit/:id', component: AddFeetypeComponent },
  { path: 'view', component: ViewFeetypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeetypeRoutingModule { }
