import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { WastagereportRoutingModule } from './wastagereport-routing.module';
import { WastagereportComponent } from './wastagereport.component';


@NgModule({
  declarations: [WastagereportComponent],
  imports: [
    CommonModule,
    SharedModule,
    WastagereportRoutingModule
  ]
})
export class WastagereportModule { }
