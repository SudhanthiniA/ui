import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupremecourtcaseformComponent } from './supremecourtcaseform.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: SupremecourtcaseformComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: 'view', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupremecourtcaseformRoutingModule { }
