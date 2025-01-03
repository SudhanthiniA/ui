import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddinstallationandverificationComponent } from './addinstallationandverification/addinstallationandverification.component';
import { ViewinstallationandverificationComponent } from './viewinstallationandverification/viewinstallationandverification.component';
import { InstallationandverificationComponent } from './installationandverification.component';

const routes: Routes = [
  {
    path: 'list',
    component: InstallationandverificationComponent
  },
  {
    path: 'add',
    component: AddinstallationandverificationComponent
  },
  {
    path: 'view',
    component: ViewinstallationandverificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallationandverificationRoutingModule { }
