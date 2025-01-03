import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationstatusComponent } from './applicationstatus.component';
import { ViewapplicationstatusComponent } from './viewapplicationstatus/viewapplicationstatus.component';


const routes: Routes = [
  { path: '', component: ApplicationstatusComponent },
  { path: 'view', component: ViewapplicationstatusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationstatusRoutingModule { }
