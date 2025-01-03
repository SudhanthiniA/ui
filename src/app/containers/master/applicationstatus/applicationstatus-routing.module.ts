import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationstatusComponent } from './applicationstatus.component';
import { AddeditapplicationstatusComponent } from './addeditapplicationstatus/addeditapplicationstatus.component';
import { ViewapplicationstatusComponent } from './viewapplicationstatus/viewapplicationstatus.component';

const routes: Routes = [
  { path: 'list', component: ApplicationstatusComponent },
  { path: 'add', component: AddeditapplicationstatusComponent },
  { path: 'edit/:id', component: AddeditapplicationstatusComponent },
  { path: 'view/:id', component: ViewapplicationstatusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationstatusRoutingModule { }
