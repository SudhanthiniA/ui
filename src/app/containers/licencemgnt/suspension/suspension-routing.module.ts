import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuspensionComponent } from './suspension/suspension.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ViewComponent } from './suspension/view/view.component';
import { CancellationComponent } from './cancellation/cancellation.component';

const routes: Routes = [
  {
    path : '',
    component : SuspensionComponent
  },
  {
    path: 'applicant',
    component : ApplicantComponent
  },
  {
    path: 'view',
    component : ViewComponent
  },
  {
    path: 'cancel',
    component : CancellationComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SuspensionRoutingModule { }
