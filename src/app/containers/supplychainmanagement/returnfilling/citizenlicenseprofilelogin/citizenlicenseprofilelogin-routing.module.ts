import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenlicenseprofileloginComponent } from './citizenlicenseprofilelogin.component';
import { RetailflComponent } from './retailfl/retailfl.component';
import { RetailclComponent } from './retailcl/retailcl.component';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { BondwarehouseComponent } from './bondwarehouse/bondwarehouse.component';
import { AcknowlegementscreenComponent } from './acknowlegementscreen/acknowlegementscreen.component';
import { DeolistviewComponent } from './deolistview/deolistview.component';
import { DeodetailedviewComponent } from './deodetailedview/deodetailedview.component';
import { WholesaleflComponent } from './wholesalefl/wholesalefl.component';
import { WholesalebeerComponent } from './wholesalebeer/wholesale.component';
import { RetailbeerComponent } from './retailbeer/retailbeer.component';

const routes: Routes = [
  { path: 'list', component: CitizenlicenseprofileloginComponent },
  { path: 'retailfl', component: RetailflComponent },
  { path: 'retailcl', component: RetailclComponent },
  { path: 'wholesale', component: WholesaleComponent },
  { path: 'wholesalebeer', component: WholesalebeerComponent },
  { path: 'bondwarehouse', component: BondwarehouseComponent },
  { path: 'acknowlegement', component: AcknowlegementscreenComponent },
  { path: 'deolistview', component: DeolistviewComponent },
  { path: 'deodetailedview', component: DeodetailedviewComponent },
  { path: 'wholesalefl', component: WholesaleflComponent },
  { path: 'retailbeer', component: RetailbeerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenlicenseprofileloginRoutingModule { }
