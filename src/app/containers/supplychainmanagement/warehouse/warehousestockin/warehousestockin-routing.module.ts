import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { StockinComponent } from './Stockin.component';
import { AddwarehousestockinComponent } from './addwarehousestockin/addwarehousestockin.component';
import { ViewwarehousestockinComponent } from './viewwarehousestockin/viewwarehousestockin.component';
import { WarehousestockinComponent } from './warehousestockin.component';

const routes: Routes = [
  { path: 'list', component: WarehousestockinComponent },
  { path: 'add', component: AddwarehousestockinComponent },
  { path: 'edit/:id', component: AddwarehousestockinComponent },
  { path: 'view/:id', component: ViewwarehousestockinComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousestockinRoutingModule { }
