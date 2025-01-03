import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusrptlicregComponent } from './statusrptlicreg.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: StatusrptlicregComponent },
  { path: 'view', component: ViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusrptlicregRoutingModule { }
