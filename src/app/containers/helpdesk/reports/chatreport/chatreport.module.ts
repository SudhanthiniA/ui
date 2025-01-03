import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { ChatreportRoutingModule } from './chatreport-routing.module';
import { ChatreportComponent } from './chatreport.component';

@NgModule({
  declarations: [ChatreportComponent],
  imports: [
    CommonModule,
    ChatreportRoutingModule,
    SharedModule
  ]
})
export class ChatreportModule { }
