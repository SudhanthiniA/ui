import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PrefermentationComponent } from './prefermentation.component';

const routes: Routes = [
  { path: 'list', component: PrefermentationComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: AddComponent},
  {path: 'view/:id', component: ViewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrefermentationRoutingModule { }
