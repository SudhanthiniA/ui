import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelrequestComponent } from './labelrequest.component';
import { AddrequestComponent } from './addrequest/addrequest.component';

const routes: Routes = [
  {
    path: 'list',
    component: LabelrequestComponent
  },
  {
    path: 'add',
    component: AddrequestComponent
  },
  {
    path: 'edit/:Id',
    component: AddrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelrequestRoutingModule { }
