import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CctvinstallationComponent } from './cctvinstallation.component';
import { AddcctvinstallationComponent } from './addcctvinstallation/addcctvinstallation.component';
import { ViewcctvinstallationComponent } from './viewcctvinstallation/viewcctvinstallation.component';

const routes: Routes = [
  {
    path: 'list',
    component: CctvinstallationComponent
  },
  {
    path: 'add',
    component: AddcctvinstallationComponent
  },
  {
    path: 'view',
    component: ViewcctvinstallationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CctvinstallationRoutingModule { }
