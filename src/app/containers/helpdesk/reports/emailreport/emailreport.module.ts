import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { EmailreportRoutingModule } from './emailreport-routing.module';
import { EmailreportComponent } from './emailreport.component';




@NgModule({
  declarations: [EmailreportComponent],
  imports: [
    CommonModule,
    EmailreportRoutingModule,
    SharedModule
  ]
})
export class EmailreportModule { }
