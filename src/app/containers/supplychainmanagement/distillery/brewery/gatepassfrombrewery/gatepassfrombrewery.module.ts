import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { GatepassfrombreweryRoutingModule } from './gatepassfrombrewery-routing.module';
import { GatepassfrombreweryComponent } from './gatepassfrombrewery.component';
import { AddgatepassfrombreweryComponent } from './addgatepassfrombrewery/addgatepassfrombrewery.component';
import { ViewgatepassfrombreweryComponent } from './viewgatepassfrombrewery/viewgatepassfrombrewery.component';



@NgModule({
  declarations: [GatepassfrombreweryComponent, AddgatepassfrombreweryComponent,ViewgatepassfrombreweryComponent],
  imports: [
    CommonModule,
    GatepassfrombreweryRoutingModule,
    SharedModule
  ]
})
export class GatepassfrombreweryModule { }
