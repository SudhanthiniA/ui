import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TankstockoverviewComponent } from './tankstockoverview.component';
import { TankstockoverviewRoutingModule } from './tankstockoverview-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [TankstockoverviewComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    TankstockoverviewRoutingModule
  ]
})
export class TankstockoverviewModule { }
