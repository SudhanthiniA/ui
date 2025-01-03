import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTankMaterialComponent } from './add-tank-material/add-tank-material.component';


import { TankMaterialComponent } from './tank-material.component';
import { ViewTankMaterialComponent } from './view-tank-material/view-tank-material.component';

const routes: Routes = [
  { path: 'list', component: TankMaterialComponent },
  { path: 'add', component: AddTankMaterialComponent },
  { path: 'edit/:id', component: AddTankMaterialComponent },
  { path: 'view/:id', component: ViewTankMaterialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankMaterialRoutingModule { }
