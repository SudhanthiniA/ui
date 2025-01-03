import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { UnreservedmolassesreportRoutingModule } from './unreservedmolassesreport-routing.module';
import { UnreservedmolassesreportComponent } from './unreservedmolassesreport.component';

@NgModule({
  imports: [
    CommonModule,
    UnreservedmolassesreportRoutingModule,
    SharedModule
  ],
  declarations: [UnreservedmolassesreportComponent]
})
export class UnreservedmolassesreportModule { }
