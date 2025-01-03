import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockInComponent } from './stock-in.component'; 
import { StockInRoutingModule } from './stock-in-routing.module';
import { AddstockinComponent } from './addstockin.component';
import { ViewstockinComponent } from './viewstockin.component';

@NgModule({
  declarations: [StockInComponent, AddstockinComponent, ViewstockinComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockInRoutingModule
  ] 
})

export class StockInModule { }
