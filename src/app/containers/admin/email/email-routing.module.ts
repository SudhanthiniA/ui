import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailComponent } from './email.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: EmailComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'view/:id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
