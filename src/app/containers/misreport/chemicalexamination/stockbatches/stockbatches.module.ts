import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { StockbatchesRoutingModule } from './stockbatches-routing.module';
import { StockbatchesComponent } from './stockbatches.component';
import { ViewstockbatchesComponent } from './viewstockbatches/viewstockbatches.component';



@NgModule({
  declarations: [StockbatchesComponent, ViewstockbatchesComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockbatchesRoutingModule

  ]
})
export class StockbatchesModule { }
