import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RedistillationforbottledstockRoutingModule } from './redistillationforbottledstock-routing.module';
import { RedistillationforbottledstockComponent } from './redistillationforbottledstock.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [RedistillationforbottledstockComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RedistillationforbottledstockRoutingModule
  ]
})
export class RedistillationforbottledstockModule { }
