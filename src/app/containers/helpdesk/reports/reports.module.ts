import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ReportsRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
})
export class ReportsModule { }
