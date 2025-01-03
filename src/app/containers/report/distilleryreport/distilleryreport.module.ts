import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DistilleryreportRoutingModule } from './distilleryreport-routing.module';
import { GlobalService } from '../service/global.service';

@NgModule({
  imports: [
    SharedModule,
    DistilleryreportRoutingModule
  ],
  providers: [GlobalService],
  declarations: []
})
export class DistilleryreportModule { }
