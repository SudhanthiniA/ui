import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf7molassesformatComponent } from './mf7molassesformat.component';
import { Addmf7molassesformatComponent } from './addmf7molassesformat/addmf7molassesformat.component';
import { Viewmf7molassesformatComponent } from './viewmf7molassesformat/viewmf7molassesformat.component';

const routes: Routes = [
  { path: 'list', component: Mf7molassesformatComponent },
  { path: 'add', component: Addmf7molassesformatComponent },
  { path: 'view', component: Viewmf7molassesformatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf7molassesformatRoutingModule { }
