import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusComponent } from './status.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { AddeditstatusComponent } from './addeditstatus/addeditstatus.component';

const routes: Routes = [
  { path: 'list', component: StatusComponent },
  { path: 'add', component: AddeditstatusComponent },
  { path: 'edit/:id', component: AddeditstatusComponent },
  { path: 'view', component: ViewstatusComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
