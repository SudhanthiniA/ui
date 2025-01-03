import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailrequestComponent } from './emailrequest.component';
import { ViewemailComponent } from './viewemail/viewemail.component';

const routes: Routes = [
  { path: '', component: EmailrequestComponent },
  // { path: 'viewemail', component: ViewemailComponent },
  { path: 'viewemail', component: ViewemailComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailrequestRoutingModule { }
