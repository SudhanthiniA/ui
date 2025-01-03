import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentalApplicationComponent } from './accidental-application.component';
import { AddaccidentalApplicationComponent } from './addaccidental-application/addaccidental-application.component';
import { ViewaccidentalApplicationComponent } from './viewaccidental-application/viewaccidental-application.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';

const routes: Routes = [
  {
    path: 'list',
    component: AccidentalApplicationComponent
  },
  {
    path: 'add',
    component: AddaccidentalApplicationComponent
  },
  {
    path: 'view/:Id',
    component: ViewaccidentalApplicationComponent
  },
  {
    path: 'edit/:Id',
    component: AddaccidentalApplicationComponent
  },
  {
    path: 'ack',
    component: AcknowledgementComponent
  },
  {
    path: 'accidentalcasedeologin',
    loadChildren: () => import('./accidentalcasedeologin/accidentalcasedeologin.module').then(m => m.AccidentalcasedeologinModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentalApplicationRoutingModule { }
