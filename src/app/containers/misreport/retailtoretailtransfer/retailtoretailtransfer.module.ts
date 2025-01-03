import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RetailtoretailtransferRoutingModule } from './retailtoretailtransfer-routing.module';
import { MisquotadetailsComponent } from './misquotadetails/misquotadetails.component';
import { MistransfersalesComponent } from './mistransfersales/mistransfersales.component';
import { MissalesandtransferComponent } from './missalesandtransfer/missalesandtransfer.component';



@NgModule({
  declarations: [MisquotadetailsComponent, MistransfersalesComponent, MissalesandtransferComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailtoretailtransferRoutingModule
  ]
})
export class RetailtoretailtransferModule { }
