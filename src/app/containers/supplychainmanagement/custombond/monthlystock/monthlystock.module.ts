import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { MonthlystockRoutingModule } from './monthlystock-routing.module';
import { MonthlystockComponent } from './monthlystock.component';
import { ViewmonthlystockComponent } from './viewmonthlystock/viewmonthlystock.component';
import { AddmonthlystockComponent } from './addmonthlystock/addmonthlystock.component';



@NgModule({
  declarations: [MonthlystockComponent, ViewmonthlystockComponent, AddmonthlystockComponent],
  imports: [
    CommonModule,
    SharedModule,
    MonthlystockRoutingModule
  ]
})
export class MonthlystockModule { }
