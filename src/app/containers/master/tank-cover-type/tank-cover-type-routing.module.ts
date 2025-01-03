import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTankCoverTypeComponent } from './add-tank-cover-type/add-tank-cover-type.component';

import { TankCoverTypeComponent } from './tank-cover-type.component';
import { ViewTankCoverTypeComponent } from './view-tank-cover-type/view-tank-cover-type.component';

const routes: Routes = [
  { path: 'list', component: TankCoverTypeComponent },
  { path: 'add', component: AddTankCoverTypeComponent },
  { path: 'edit/:id', component: AddTankCoverTypeComponent },
  { path: 'view', component: ViewTankCoverTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankCoverTypeRoutingModule { }
