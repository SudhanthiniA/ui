import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivefromginplantComponent } from './receivefromginplant.component';
import { AddreceivefromginplantComponent } from './addreceivefromginplant/addreceivefromginplant.component';
import { ViewreceivefromginplantComponent } from './viewreceivefromginplant/viewreceivefromginplant.component';


const routes: Routes = [
  {
    path : 'list',
    component : ReceivefromginplantComponent
  },
  {
    path: 'view',
    component : ViewreceivefromginplantComponent
  },
  {
    path : 'add',
    component : AddreceivefromginplantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivefromginplantRoutingModule { }
