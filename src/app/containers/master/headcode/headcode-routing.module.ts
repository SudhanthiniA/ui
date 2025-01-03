import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadcodeComponent } from './headcode.component';
import { AddHeadcodeComponent } from './add-headcode/add-headcode.component';
import { ViewHeadcodeComponent } from './view-headcode/view-headcode.component';

const routes: Routes = [
  { path: 'list', component: HeadcodeComponent },
  { path: 'add', component: AddHeadcodeComponent },
  { path: 'edit/:id', component: AddHeadcodeComponent },
  { path: 'view', component: ViewHeadcodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadcodeRoutingModule { }
