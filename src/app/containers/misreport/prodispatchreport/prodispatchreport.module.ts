import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ProdispatchreportRoutingModule } from './prodispatchreport-routing.module';
import { ProdispatchreportComponent } from './prodispatchreport.component';
// import { ParentunitComponent } from './parentunit/parentunit.component';


@NgModule({
  declarations: [ ProdispatchreportComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProdispatchreportRoutingModule
  ]
})
export class ProdispatchreportModule { }
