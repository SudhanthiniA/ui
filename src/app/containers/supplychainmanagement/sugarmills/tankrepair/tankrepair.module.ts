import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TankrepairRoutingModule } from './tankrepair-routing.module';
import { TankrepairComponent } from './tankrepair.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [TankrepairComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    TankrepairRoutingModule,
    SharedModule
  ]
})
export class TankrepairModule { }
