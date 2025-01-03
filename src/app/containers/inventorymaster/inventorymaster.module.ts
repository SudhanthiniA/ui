import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';

import { InventorymasterRoutingModule } from './inventorymaster-routing.module';

@NgModule({
  imports: [
    InventorymasterRoutingModule,
    SharedModule
  ]
})
export class InventorymasterModule { }
