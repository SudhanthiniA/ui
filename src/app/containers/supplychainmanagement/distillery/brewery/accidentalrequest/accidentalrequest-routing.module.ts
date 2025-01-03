import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentalrequestComponent } from './accidentalrequest.component';
import { AddaccidentalrequestComponent } from './addaccidentalrequest/addaccidentalrequest.component';
import { ViewaccidentalrequestComponent } from './viewaccidentalrequest/viewaccidentalrequest.component';
import { AccidentcaselistComponent } from './accidentcaselist/accidentcaselist.component';
import { ViewaccidentcaseComponent } from './viewaccidentcase/viewaccidentcase.component';
import { ModifiedtranspassComponent } from './modifiedtranspass/modifiedtranspass.component';
import { AddapprovalComponent } from './addapproval/addapproval.component';
import { ViewapprovalComponent } from './viewapproval/viewapproval.component';


const routes: Routes = [
  {
    path: 'list',
    component: AccidentalrequestComponent
  },
  {
    path: 'add',
    component: AddaccidentalrequestComponent
  },
  {
    path: 'view',
    component: ViewaccidentalrequestComponent
  },
  {
    path: 'addapproval',
    component: AddapprovalComponent
  },
  {
    path: 'viewapproval',
    component: ViewapprovalComponent
  },

  {
    path: 'accidentcaselist',
    component: AccidentcaselistComponent
  },
  {
    path: 'accidentcasevew',
    component: ViewaccidentcaseComponent
  },
  {
    path: 'modify',
    component: ModifiedtranspassComponent
  }
];

@NgModule({
  imports: 
  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentalrequestRoutingModule { }
