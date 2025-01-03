import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizeBwflLandingComponent } from './authorize-bwfl-landing/authorize-bwfl-landing.component';
import { AuthorizeBwflPersonComponent } from './authorize-bwfl-person/authorize-bwfl-person.component';
import { ViewAuthorizedBwflPersonComponent } from './view-authorized-bwfl-person/view-authorized-bwfl-person.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizeBwflLandingComponent
  },
  {
    path: 'person',
    component: AuthorizeBwflPersonComponent
  },
  {
    path: ':authPersonId/view',
    component: ViewAuthorizedBwflPersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizeBwflRoutingModule { }
