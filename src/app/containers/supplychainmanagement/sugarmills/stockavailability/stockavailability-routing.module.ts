import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockavailabilityComponent } from './stockavailability.component';
import { AddeditstockavailabilityComponent } from './addeditstockavailability/addeditstockavailability.component';
import { ViewstockavailabilityComponent } from './viewstockavailability/viewstockavailability.component';
import { TankmaintainanceComponent } from './tankmaintainance/tankmaintainance.component';
import { TankconversionComponent } from './tankconversion/tankconversion.component';
import { TanktransferComponent } from './tanktransfer/tanktransfer.component';
import { TankactiveinactiveComponent } from './tankmaintainance/tankactiveinactive/tankactiveinactive.component';
import { TankmaintainComponent } from './tankmaintainance/tankmaintain/tankmaintain.component';
import { RemovalComponent } from './tankmaintainance/removal/removal.component';


const routes: Routes = [
  {
    path : '',
    component : StockavailabilityComponent
  },
  {
    path : 'add',
    component : AddeditstockavailabilityComponent
  },
  {
    path: 'edit/:Id',
    component: AddeditstockavailabilityComponent
  },
  {
    path: 'view/:Id',
    component: ViewstockavailabilityComponent
  },
  {
    path: 'tankmaintainance/:Id',
    component: TankmaintainanceComponent
  },
  {
    path: 'tankconverstion/:Id',
    component: TankconversionComponent
  },
  {
    path: 'tanktransfer/:Id',
    component: TanktransferComponent
  },
  {
    path: 'tankactive/:Id',
    component: TankactiveinactiveComponent
  },
  {
    path: 'tankmaintain/:Id',
    component: TankmaintainComponent
  },
  {
    path: 'tankmaintain/:Id',
    component: TankmaintainComponent
  },
  {
    path: 'removal/:Id',
    component: RemovalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StockavailabilityRoutingModule { }
