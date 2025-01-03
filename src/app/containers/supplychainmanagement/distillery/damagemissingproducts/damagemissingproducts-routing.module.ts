import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DamagemissingproductsComponent } from './damagemissingproducts.component';
import { ViewdamagemissingproductsComponent } from './viewdamagemissingproducts/viewdamagemissingproducts.component';


const routes: Routes = [
  { path: 'list', component: DamagemissingproductsComponent },
   { path: 'view', component: ViewdamagemissingproductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DamagemissingproductsRoutingModule { }
