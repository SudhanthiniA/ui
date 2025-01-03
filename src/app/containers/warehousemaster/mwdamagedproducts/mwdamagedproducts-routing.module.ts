import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwdamagedproductsComponent } from './mwdamagedproducts.component';
import { ViewmwdamagedproductsComponent } from './viewmwdamagedproducts/viewmwdamagedproducts.component';

const routes: Routes = [
  { path: 'list', component: MwdamagedproductsComponent },
  { path: 'view', component: ViewmwdamagedproductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwdamagedproductsRoutingModule { }
