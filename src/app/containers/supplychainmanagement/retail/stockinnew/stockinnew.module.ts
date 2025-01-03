import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { StockinnewRoutingModule } from './stockinnew-routing.module';
import { StockinnewComponent } from './stockinnew.component';
import { AddstockinnewComponent } from './addstockinnew/addstockinnew.component';
import { ViewstockinnewComponent } from './viewstockinnew/viewstockinnew.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockinnewqrscanComponent } from './stockinnewqrscan/stockinnewqrscan.component';
import { PreviewstockinnewComponent } from './previewstockinnew/previewstockinnew.component';

@NgModule({
  declarations: [StockinnewComponent, AddstockinnewComponent, ViewstockinnewComponent, StockinnewqrscanComponent, PreviewstockinnewComponent],
  imports: [
    CommonModule,
    StockinnewRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class StockinnewModule { }
