import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AddgatepassfromdistillerytomanufacturewholesaleComponent } from './addgatepassfromdistillerytomanufacturewholesale/addgatepassfromdistillerytomanufacturewholesale.component';
// import { ViewgatepassfromdistillerytomanufacturewholesaleComponent } from './viewgatepassfromdistillerytomanufacturewholesale/viewgatepassfromdistillerytomanufacturewholesale.component';
import { GatepassfromdistillerytomanufacturewholesaleComponent } from './gatepassfromdistillerytomanufacturewholesale.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { GatepassfromdistillerytomanufacturewholesaleRoutingModule } from './gatepassfromdistillerytomanufacturewholesale-routing.module';


@NgModule({
  declarations: [ GatepassfromdistillerytomanufacturewholesaleComponent],
  imports: [
    CommonModule,
    GatepassfromdistillerytomanufacturewholesaleRoutingModule,
    SharedModule
  ]
})
export class GatepassfromdistillerytomanufacturewholesaleModule { }
