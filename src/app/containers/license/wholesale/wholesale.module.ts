import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { WholesaleRoutingModule } from './wholesale-routing.module';
// import { WholesaleComponent } from './wholesale.component';



@NgModule({
  declarations: [],
  imports: [
    WholesaleRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class WholesaleModule { }
