import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifisentlicregComponent } from './notifisentlicreg.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: NotifisentlicregComponent },
  { path: 'view', component: ViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotifisentlicregRoutingModule { }
