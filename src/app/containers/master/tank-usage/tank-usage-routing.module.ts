import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtankUsageComponent } from './addtank-usage/addtank-usage.component';

import { TankUsageComponent } from './tank-usage.component';
import { ViewTankUsageComponent } from './view-tank-usage/view-tank-usage.component';

const routes: Routes = [
  { path: 'list', component: TankUsageComponent },
  { path: 'add', component: AddtankUsageComponent },
  // { path: 'edit/:id', component: AddTankusageComponent },
  { path: 'view', component: ViewTankUsageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankUsageRoutingModule { }
