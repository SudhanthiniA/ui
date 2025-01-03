import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { CitizenlicenseprofileloginRoutingModule } from './citizenlicenseprofilelogin-routing.module';
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



@NgModule({
  declarations: [CitizenlicenseprofileloginComponent, RetailflComponent, RetailclComponent, WholesaleComponent, BondwarehouseComponent, AcknowlegementscreenComponent, DeolistviewComponent, DeodetailedviewComponent, WholesalebeerComponent, WholesaleflComponent, RetailbeerComponent],
  imports: [
    CommonModule,
    SharedModule,
    CitizenlicenseprofileloginRoutingModule
  ]
})
export class CitizenlicenseprofileloginModule { }
