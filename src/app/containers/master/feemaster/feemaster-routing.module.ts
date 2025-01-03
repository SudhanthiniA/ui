import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeemasterComponent } from './feemaster.component';
import { AddfeeComponent } from './addfee/addfee.component';
import { ViewfeeComponent } from './viewfee/viewfee.component';


const routes: Routes = [
  {
    path: 'list',
    component: FeemasterComponent
  },
  {
    path: 'add',
    component: AddfeeComponent
  },
  {
    path: 'edit/:Id',
    component: AddfeeComponent
  },
  {
    path: 'view/:Id',
    component: ViewfeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeemasterRoutingModule { }
