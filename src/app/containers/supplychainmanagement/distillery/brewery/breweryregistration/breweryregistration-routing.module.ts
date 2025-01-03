import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreweryregistrationComponent } from './breweryregistration.component';
import { AddbreweryregistrationComponent } from './addbreweryregistration/addbreweryregistration.component';
import { ViewbreweryregistrationComponent } from './viewbreweryregistration/viewbreweryregistration.component';

const routes: Routes = [
  {
    path : 'list',
    component : BreweryregistrationComponent
  },
  {
    path : 'add',
    component : AddbreweryregistrationComponent
  },
  {
    path : 'view',
    component : ViewbreweryregistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreweryregistrationRoutingModule { }
