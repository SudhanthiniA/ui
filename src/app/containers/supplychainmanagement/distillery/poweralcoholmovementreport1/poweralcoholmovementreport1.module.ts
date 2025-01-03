import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { Poweralcoholmovementreport1RoutingModule } from './poweralcoholmovementreport1-routing.module';
import { Poweralcoholmovementreport1Component } from './poweralcoholmovementreport1.component';
import { Addpoweralcoholmovementreport1Component } from './addpoweralcoholmovementreport1/addpoweralcoholmovementreport1.component';
import { Viewpoweralcoholmovementreport1Component } from './viewpoweralcoholmovementreport1/viewpoweralcoholmovementreport1.component';


@NgModule({
  declarations: [Poweralcoholmovementreport1Component, Addpoweralcoholmovementreport1Component, Viewpoweralcoholmovementreport1Component],
  imports: [
    CommonModule,
    SharedModule,
    Poweralcoholmovementreport1RoutingModule
  ]
})
export class Poweralcoholmovementreport1Module { }
