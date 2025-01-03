import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentcattlefieldComponent } from './indentcattlefield.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: IndentcattlefieldComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndentcattlefieldRoutingModule { }
