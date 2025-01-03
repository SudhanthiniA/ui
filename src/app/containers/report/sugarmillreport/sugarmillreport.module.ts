import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { SugarmillreportRoutingModule } from './sugarmillreport-routing.module';
import { GlobalService } from '../service/global.service';

@NgModule({
  imports: [
    SharedModule,
    SugarmillreportRoutingModule
  ],
  providers: [GlobalService],
  declarations: []
})
export class SugarmillreportModule { }
