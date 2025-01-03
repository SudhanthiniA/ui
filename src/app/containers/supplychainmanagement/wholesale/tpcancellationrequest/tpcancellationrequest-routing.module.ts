import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TpcancellationrequestComponent } from './tpcancellationrequest.component';
import { AddtpcancellationrequestComponent } from './addtpcancellationrequest/addtpcancellationrequest.component';
import { ViewtpcancellationrequestComponent } from './viewtpcancellationrequest/viewtpcancellationrequest.component';

const routes: Routes = [
  {
    path: 'list',
    component: TpcancellationrequestComponent
  },
  {
    path: 'add',
    component: AddtpcancellationrequestComponent
  },
  {
    path: 'view',
    component: ViewtpcancellationrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TpcancellationrequestRoutingModule { }
