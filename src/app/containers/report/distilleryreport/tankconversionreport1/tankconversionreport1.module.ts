import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { GlobalService } from '../../service/global.service';
import { Tankconversionreport1RoutingModule } from './tankconversionreport1-routing.module';
import { Tankconversionreport1Component } from './tankconversionreport1.component';

@NgModule({
  imports: [
    CommonModule,
    Tankconversionreport1RoutingModule,
    SharedModule,
  ],
  providers: [GlobalService],
  declarations: [Tankconversionreport1Component]
})
export class Tankconversionreport1Module { }
