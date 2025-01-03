import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandmasterComponent } from './brandmaster.component';
import { AddbrandComponent } from './addbrand/addbrand.component';
import { ViewbrandComponent } from './viewbrand/viewbrand.component';


const routes: Routes = [
  {
    path: 'list',
    component: BrandmasterComponent
  },
  {
    path: 'add',
    component: AddbrandComponent
  },
  {
    path : 'edit/:Id',
    component : AddbrandComponent
  },
  {
    path : 'view/:Id',
    component : ViewbrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandmasterRoutingModule { }
