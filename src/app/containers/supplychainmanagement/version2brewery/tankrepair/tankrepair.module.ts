import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { TankrepairRoutingModule } from './tankrepair-routing.module';
import { TankrepairComponent } from './tankrepair.component';
import { AddtankrepairComponent } from './addtankrepair/addtankrepair.component';
import { ViewtankrepairComponent } from './viewtankrepair/viewtankrepair.component';



@NgModule({
  declarations: [TankrepairComponent, AddtankrepairComponent, ViewtankrepairComponent],
  imports: [
    CommonModule,
    SharedModule,
    TankrepairRoutingModule
  ]
})
export class TankrepairModule { }
