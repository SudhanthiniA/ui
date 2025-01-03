import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTankShapeComponent } from './add-tank-shape/add-tank-shape.component';

import { TankShapeComponent } from './tank-shape.component';
import { ViewTankShapeComponent } from './view-tank-shape/view-tank-shape.component';

const routes: Routes = [
  { path: 'list', component: TankShapeComponent },
  { path: 'add', component: AddTankShapeComponent },
  { path: 'edit/:id', component: AddTankShapeComponent },
  { path: 'view/:id', component: ViewTankShapeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankShapeRoutingModule { }
