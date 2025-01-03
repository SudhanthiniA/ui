import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { HardwareandsoftwareRoutingModule } from './hardwareandsoftware-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HardwareandsoftwareRoutingModule
  ],
  providers: [DatePipe],
  declarations: [] 
})
export class HardwareandsoftwareModule { }
