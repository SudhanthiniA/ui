import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './brand.component';
import { AddbrandComponent } from './addbrand/addbrand.component';
import { ViewbrandComponent } from './viewbrand/viewbrand.component';

const routes: Routes = [
  { path: 'list', component: BrandComponent },
  { path: 'add', component: AddbrandComponent },
  { path: 'view', component: ViewbrandComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
