import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { G6codeComponent } from './g6code.component';
import { AddHeadcodeComponent } from './add-headcode/add-headcode.component';
import { ViewHeadcodeComponent } from './view-headcode/view-headcode.component';

const routes: Routes = [
  { path: 'list', component: G6codeComponent },
  { path: 'add', component: AddHeadcodeComponent },
  { path: 'edit/:id', component: AddHeadcodeComponent },
  { path: 'view', component: ViewHeadcodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G6codeRoutingModule { }
