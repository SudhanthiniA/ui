import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ConsolidatedsamplereportRoutingModule } from './consolidatedsamplereport-routing.module';
import { ConsolidatedsamplereportComponent } from './consolidatedsamplereport.component';
import { ViewconsolidatedsamplereportComponent } from './viewconsolidatedsamplereport/viewconsolidatedsamplereport.component';



@NgModule({
  declarations: [ConsolidatedsamplereportComponent, ViewconsolidatedsamplereportComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConsolidatedsamplereportRoutingModule

  ]
})
export class ConsolidatedsamplereportModule { }
