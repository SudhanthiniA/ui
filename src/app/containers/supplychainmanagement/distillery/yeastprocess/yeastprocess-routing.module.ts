import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { YeastprocessComponent } from './yeastprocess.component';

const routes: Routes = [
  { path: 'list', component: YeastprocessComponent},
  {path: 'add', component: AddComponent},
  {
    path: 'edit/:id',
    component: AddComponent
  },
  {path: 'view', component: ViewComponent},
  {path: 'preview', component: ViewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YeastprocessRoutingModule { }
