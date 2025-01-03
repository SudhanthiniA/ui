import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventorystockComponent } from './inventorystock.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : InventorystockComponent
  },
  {
    path : 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventorystockRoutingModule { }
