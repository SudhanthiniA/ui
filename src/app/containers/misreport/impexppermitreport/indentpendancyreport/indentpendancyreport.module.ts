import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IndentpendancyreportRoutingModule } from './indentpendancyreport-routing.module';
import { ViewComponent } from './view/view.component';
import { IndentpendancyreportComponent } from './indentpendancyreport.component';


@NgModule({
  declarations: [ViewComponent, IndentpendancyreportComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentpendancyreportRoutingModule
  ]
})
export class IndentpendancyreportModule { }
