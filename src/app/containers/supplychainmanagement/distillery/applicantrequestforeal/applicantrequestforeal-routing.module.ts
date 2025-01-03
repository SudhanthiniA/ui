import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantrequestforealComponent } from './applicantrequestforeal.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{ path: 'list', component: ApplicantrequestforealComponent },
{ path: 'add', component: AddComponent },
{ path: 'view', component: ViewComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantrequestforealRoutingModule { }
