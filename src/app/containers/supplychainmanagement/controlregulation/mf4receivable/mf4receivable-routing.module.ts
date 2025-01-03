import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mf4receivableComponent } from './mf4receivable.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AckeditComponent } from './ackedit/ackedit.component';

const routes: Routes = [
  { path: 'list', component: Mf4receivableComponent},
  {path: 'add', component: AddComponent},
  {path: 'view', component:ViewComponent},
  {path: 'edit', component:AckeditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf4receivableRoutingModule { }
