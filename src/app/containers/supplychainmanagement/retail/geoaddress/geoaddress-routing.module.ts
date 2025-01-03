import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeoaddressComponent } from './geoaddress.component';
import { AddgeoaddressComponent } from './addgeoaddress/addgeoaddress.component';
import { ViewgeoaddressComponent } from './viewgeoaddress/viewgeoaddress.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdategeoaddressComponent } from './updategeoaddress/updategeoaddress.component';

const routes: Routes = [
  {
    path: 'list',
    component: GeoaddressComponent
  },
  {
    path: 'add',
    component: AddgeoaddressComponent
  },
  {
    path: 'view',
    component: ViewgeoaddressComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'update',
    component: UpdategeoaddressComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeoaddressRoutingModule { }
