import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionconsumptionComponent } from './productionconsumption.component';

const routes: Routes = [{ path: 'list', component: ProductionconsumptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionconsumptionRoutingModule { }
