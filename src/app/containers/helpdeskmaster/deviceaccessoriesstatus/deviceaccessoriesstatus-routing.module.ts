import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceaccessoriesstatusComponent } from './deviceaccessoriesstatus.component';
import { AdddeviceaccessoriesstatusComponent } from './adddeviceaccessoriesstatus/adddeviceaccessoriesstatus.component';
import { ViewdeviceaccessoriesstatusComponent } from './viewdeviceaccessoriesstatus/viewdeviceaccessoriesstatus.component';


const routes: Routes = [
  {
    path: 'list',
    component: DeviceaccessoriesstatusComponent
  },
  {
    path: 'add',
    component: AdddeviceaccessoriesstatusComponent
  },
  {
    path: 'view',
    component: ViewdeviceaccessoriesstatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceaccessoriesstatusRoutingModule { }
