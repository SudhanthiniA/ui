import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderrequestComponent } from './orderrequest.component';
import { VieworderrequestComponent } from './vieworderrequest/vieworderrequest.component';
import { EditorderrequestComponent } from './editorderrequest/editorderrequest.component';


const routes: Routes = [
  {
    path : 'list',
    component : OrderrequestComponent
  },
  {
    path : 'view/:Id',
    component : EditorderrequestComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderrequestRoutingModule { }
