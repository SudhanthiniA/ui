import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinedistributionComponent } from './winedistribution.component';
import { AddwinedistributionComponent } from './addwinedistribution/addwinedistribution.component';
import { ViewwinedistributionComponent } from './viewwinedistribution/viewwinedistribution.component';

const routes: Routes = [
  {
    path: 'list',
    component: WinedistributionComponent
  },
  {
    path: 'add',
    component: AddwinedistributionComponent
  },
  {
    path: 'view/:id',
    component: ViewwinedistributionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WinedistributionRoutingModule { }
