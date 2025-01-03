import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd26fortankerIdComponent } from './pd26fortanker-id.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';


const routes: Routes = [
  { path: 'list', component: Pd26fortankerIdComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'acknowledge', component: AcknowledgementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd26fortankerIdRoutingModule { }
