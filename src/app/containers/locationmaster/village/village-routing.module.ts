import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VillageComponent } from './village.component';
import { AddVillageComponent } from './add-village/add-village.component';
import { ViewVillageComponent } from './view-village/view-village.component';

const routes: Routes = [
  {
    path: 'list',
    component: VillageComponent
  },
  {
    path: 'add',
    component: AddVillageComponent
  },
  {
    path: 'edit/:id',
    component: AddVillageComponent
  },
  {
    path: 'view/:id',
    component: ViewVillageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillageRoutingModule { }
