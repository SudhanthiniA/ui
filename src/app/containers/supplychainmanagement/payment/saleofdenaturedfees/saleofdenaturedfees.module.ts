import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SaleofdenaturedfeesRoutingModule } from './saleofdenaturedfees-routing.module';
import { SaleofdenaturedfeesComponent } from './saleofdenaturedfees.component';
import { AddsaleofdenaturedfeesComponent } from './addsaleofdenaturedfees/addsaleofdenaturedfees.component';
import { EditsaleofdenaturedfeesComponent } from './editsaleofdenaturedfees/editsaleofdenaturedfees.component';
import { ViewsaleofdenaturedfeesComponent } from './viewsaleofdenaturedfees/viewsaleofdenaturedfees.component';



@NgModule({
  declarations: [SaleofdenaturedfeesComponent, AddsaleofdenaturedfeesComponent, EditsaleofdenaturedfeesComponent, ViewsaleofdenaturedfeesComponent],
  imports: [
    CommonModule,
    SharedModule,
    SaleofdenaturedfeesRoutingModule
  ]
})
export class SaleofdenaturedfeesModule { }
