import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ReceiverComponent } from './receiver.component';

const routes: Routes = [
  { path: 'list', component: ReceiverComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: AddComponent},
  {path: 'view/:id', component: ViewComponent},
  {path: 'preview', component: ViewComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiverRoutingModule { }
