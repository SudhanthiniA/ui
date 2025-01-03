import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermitrequestComponent } from './permitrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: PermitrequestComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  // { path: 'approval', component: Approvalfl32Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermitrequestRoutingModule { }
