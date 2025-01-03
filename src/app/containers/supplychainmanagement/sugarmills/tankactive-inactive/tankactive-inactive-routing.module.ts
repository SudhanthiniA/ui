import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TankactiveinactiveViewComponent } from './tankactiveinactive-view/tankactiveinactive-view.component';
import { TankactiveinactiveListComponent } from './tankactiveinactive-list/tankactiveinactive-list.component';
// import { TankactiveinactiveComponent } from '/supplychainmanagement/sugarmills/stockavailability/tankmaintainance/tankactiveinactive.component';
import { TankmaintainanceComponent } from './tankactiveinactive.component'
const routes: Routes = [
  {
    path : 'list',
    component : TankmaintainanceComponent
  },
  // {
  //   path : 'add',
  //   component : TankactiveinactiveComponent
  // },
  {
    path: 'edit/:Id',
    component: TankmaintainanceComponent
  },
  {
    path: 'view/:Id',
    component: TankactiveinactiveViewComponent
  },
  // {
  //   path: 'preview',
  //   component: TankmaintainanceviewComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankactiveInactiveRoutingModule { }
