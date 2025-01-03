import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { StockinnewRoutingModule } from './stockinnew-routing.module';
import { StockinnewComponent } from './stockinnew.component';
import { AddstockinnewComponent } from './addstockinnew/addstockinnew.component';
import { ViewstockinnewComponent } from './viewstockinnew/viewstockinnew.component';
import { PreviewdamagemissingComponent } from './previewdamagemissing/previewdamagemissing.component'; 

@NgModule({
  declarations: [StockinnewComponent, AddstockinnewComponent, ViewstockinnewComponent, PreviewdamagemissingComponent],
  imports: [
    CommonModule,
    StockinnewRoutingModule,
    SharedModule
  ]
})
export class StockinnewModule { }
