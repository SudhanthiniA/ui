import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { GlobalService } from '../../service/global.service';
import { Tankconversionreport2RoutingModule } from './tankconversionreport2-routing.module';
import { Tankconversionreport2Component } from './tankconversionreport2.component';

@NgModule({
  imports: [
    CommonModule,
    Tankconversionreport2RoutingModule,
    SharedModule
  ],
  providers: [GlobalService],
  declarations: [Tankconversionreport2Component]
})
export class Tankconversionreport2Module { }
