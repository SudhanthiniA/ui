import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BondwarehouseRoutingModule } from './bondwarehouse-routing.module';
import { ViewComponent } from './view/view.component';
import { BondwarehouseComponent } from './bondwarehouse.component';


@NgModule({
  declarations: [ViewComponent, BondwarehouseComponent],
  imports: [
    CommonModule,
    SharedModule,
    BondwarehouseRoutingModule
  ]
})
export class BondwarehouseModule { }
