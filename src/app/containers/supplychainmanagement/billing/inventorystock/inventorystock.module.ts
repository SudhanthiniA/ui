import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {InventorystockRoutingModule} from './inventorystock-routing.module';
import { InventorystockComponent } from './inventorystock.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [InventorystockComponent, ViewComponent],
  imports: [
    CommonModule,
    InventorystockRoutingModule,
    SharedModule
  ]
})
export class InventorystockModule { }
