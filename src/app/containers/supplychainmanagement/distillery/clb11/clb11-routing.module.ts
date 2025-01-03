import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { Clb11Component } from './clb11.component';
import { DraftfinallistComponent } from './draftfinallist/draftfinallist.component';
import { EditComponent } from './edit/edit.component';
import { AckComponent } from './ack/ack.component';

const routes: Routes = [
  { path: 'list', component: Clb11Component},
  {path: 'add', component: AddComponent},
  {path: 'view', component: ViewComponent},
  {path: 'draftfinallist', component: DraftfinallistComponent},
  {path: 'edit', component: EditComponent},
  {path: 'ack', component: AckComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Clb11RoutingModule { }
