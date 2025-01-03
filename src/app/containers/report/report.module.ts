import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { ReportRoutingModule } from './report-routing.module';
import { GlobalService } from './service/global.service';

@NgModule({
  imports: [
    SharedModule,
    ReportRoutingModule,
  ],
  providers: [GlobalService],
  declarations: []
})
export class ReportModule { }
