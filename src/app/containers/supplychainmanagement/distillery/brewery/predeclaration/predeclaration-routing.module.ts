import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PredeclarationComponent } from './predeclaration.component';

const routes: Routes = [
  { path: 'list', component: PredeclarationComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:Id', component: AddComponent},
  {path: 'view', component: ViewComponent},
  {path: 'preview', component: ViewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredeclarationRoutingModule { }
