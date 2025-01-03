import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditLocationComponent } from './addedit-location/addedit-location.component';

import { LocationComponent } from './location.component';
import { ViewLocationComponent } from './view-location/view-location.component';

const routes: Routes = [
  { path: 'list', component: LocationComponent },
  { path: 'add', component: AddeditLocationComponent },
  { path: 'edit/:Id', component: AddeditLocationComponent },
  { path: 'view/:Id', component: ViewLocationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
