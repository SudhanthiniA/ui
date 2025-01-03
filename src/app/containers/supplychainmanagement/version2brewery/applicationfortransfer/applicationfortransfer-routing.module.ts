import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationfortransferComponent } from './applicationfortransfer.component';
import { AddapplicationfortransferComponent } from './addapplicationfortransfer/addapplicationfortransfer.component';
import { ViewapplicationfortransferComponent } from './viewapplicationfortransfer/viewapplicationfortransfer.component';

const routes: Routes = [
  { path: 'list', component: ApplicationfortransferComponent},
  {path: 'add', component: AddapplicationfortransferComponent},
  {path: 'view', component: ViewapplicationfortransferComponent}

];
             
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationfortransferRoutingModule { }
