import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ReservemolassesreportRoutingModule } from './reservemolassesreport-routing.module';
import { ReservemolassesreportComponent } from './reservemolassesreport.component';

@NgModule({
  imports: [
    CommonModule,
    ReservemolassesreportRoutingModule,
    SharedModule
  ],
  declarations: [ReservemolassesreportComponent]
})
export class ReservemolassesreportModule { }
