import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { RetailRoutingModule } from './retail-routing.module';

@NgModule({
  imports: [
    SharedModule,
    RetailRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
}) 
export class RetailModule { }
