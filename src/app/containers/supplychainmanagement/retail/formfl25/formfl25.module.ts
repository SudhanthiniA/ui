import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Formfl25RoutingModule } from './formfl25-routing.module';
import { Formfl25Component } from './formfl25.component';
import { Part1Component } from './part1/part1.component';
import { Addpart1Component } from './part1/addpart1/addpart1.component';
import { Viewpart1Component } from './part1/viewpart1/viewpart1.component';
import { Part2Component } from './part2/part2.component';
import { Addpart2Component } from './part2/addpart2/addpart2.component';
import { Viewpart2Component } from './part2/viewpart2/viewpart2.component';
import { Part3Component } from './part3/part3.component';
import { Addpart3Component } from './part3/addpart3/addpart3.component';
import { Viewpart3Component } from './part3/viewpart3/viewpart3.component';
import { Part4Component } from './part4/part4.component';
import { Addpart4Component } from './part4/addpart4/addpart4.component';
import { Viewpart4Component } from './part4/viewpart4/viewpart4.component';
 


@NgModule({
  declarations: [Formfl25Component, Part1Component, Addpart1Component, Viewpart1Component, Part2Component, Addpart2Component, Viewpart2Component, Part3Component, Addpart3Component, Viewpart3Component, Part4Component, Addpart4Component, Viewpart4Component],
  imports: [
    CommonModule,
    Formfl25RoutingModule,
    SharedModule
  ]
})
export class Formfl25Module { }
