import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ProductionreportRoutingModule } from './productionreport-routing.module';
// import { ParentunitComponent } from './parentunit/parentunit.component';
// import { ProductionreportComponent } from './productionreport.component';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    SharedModule,
    ProductionreportRoutingModule
  ]
})
export class ProductionreportModule { }
