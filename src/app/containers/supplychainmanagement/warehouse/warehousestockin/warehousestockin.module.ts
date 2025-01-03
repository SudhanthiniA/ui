import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WarehousestockinRoutingModule } from './warehousestockin-routing.module';
import { WarehousestockinComponent } from './warehousestockin.component';
import { AddwarehousestockinComponent } from './addwarehousestockin/addwarehousestockin.component';
import { ViewwarehousestockinComponent } from './viewwarehousestockin/viewwarehousestockin.component';
// import { WarehousestockinComponent } from './warehousestockin.component';
// import { WarehousestockinRoutingModule } from './warehousestockin-routing.module';

@NgModule({
  declarations: [ WarehousestockinComponent, AddwarehousestockinComponent, ViewwarehousestockinComponent],
  imports: [
    CommonModule,
    SharedModule,
    WarehousestockinRoutingModule
  ]
})
export class WarehousestockinModule { }
