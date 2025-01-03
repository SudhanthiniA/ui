import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionconsumptionComponent } from './productionconsumption.component';

import { ViewproductionconsumptionComponent } from './viewproductionconsumption/viewproductionconsumption.component';

const routes: Routes = [{ path: 'list', component: ProductionconsumptionComponent },
{ path: 'view', component: ViewproductionconsumptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionconsumptionRoutingModule { }
