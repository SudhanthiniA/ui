import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgebaseComponent } from './knowledgebase.component';
import { AddknowledgebaseComponent } from './addknowledgebase/addknowledgebase.component';
import { ViewknowledgebaseComponent } from './viewknowledgebase/viewknowledgebase.component';

const routes: Routes = [
  { path: 'list', component: KnowledgebaseComponent },
  { path: 'add', component: AddknowledgebaseComponent },
  { path: 'view', component: ViewknowledgebaseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgebaseRoutingModule { }
