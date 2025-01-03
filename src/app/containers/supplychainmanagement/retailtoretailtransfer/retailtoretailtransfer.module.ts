import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { RetailtoretailtransferRoutingModule } from './retailtoretailtransfer-routing.module';

@NgModule({
  imports: [
    SharedModule,
    RetailtoretailtransferRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
}) 
export class RetailtoretailtransferModule { }
