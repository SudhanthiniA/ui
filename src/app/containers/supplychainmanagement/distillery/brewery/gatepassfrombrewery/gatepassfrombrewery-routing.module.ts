
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatepassfrombreweryComponent } from './gatepassfrombrewery.component';
import { AddgatepassfrombreweryComponent } from './addgatepassfrombrewery/addgatepassfrombrewery.component';
import { ViewgatepassfrombreweryComponent } from './viewgatepassfrombrewery/viewgatepassfrombrewery.component';

const routes: Routes = [
  {
    path : 'add',
    component : AddgatepassfrombreweryComponent
  },
  {
    path : 'view',
    component : ViewgatepassfrombreweryComponent
  },
  {
    path : 'list',
    component : GatepassfrombreweryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatepassfrombreweryRoutingModule { }
