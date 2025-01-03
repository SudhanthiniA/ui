import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubBrandmasterComponent } from './sub-brandmaster.component';
import { AddeditsubbrandComponent } from './addeditsubbrand/addeditsubbrand.component';
import { ViewsubbrandComponent } from './viewsubbrand/viewsubbrand.component';

// const routes: Routes = [{ path: '', component: SubBrandmasterComponent }];
const routes: Routes = [
  {
    path : 'list',
    component : SubBrandmasterComponent
  },
  {
    path : 'add',
    component : AddeditsubbrandComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditsubbrandComponent
  },
  {
    path : 'view/:Id',
    component : ViewsubbrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubBrandmasterRoutingModule { }
