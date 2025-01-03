import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnowledgebaseComponent } from './knowledgebase.component';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  { path: 'list', component: KnowledgebaseComponent },
  { path: 'view', component: ViewComponent },
  { path: 'add', component: AddComponent },
  { path: 'add/:id', component: AddComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgebaseRoutingModule { }
