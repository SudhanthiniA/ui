import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TransportgenerationRoutingModule } from './transportgeneration-routing.module';
import { TransportgenerationComponent } from './transportgeneration.component';
import { ViewtransportgenerationComponent } from './viewtransportgeneration/viewtransportgeneration.component';
import { AddedittransportgenerationComponent } from './addedittransportgeneration/addedittransportgeneration.component';
import { AcknowledgementgatepassComponent } from './acknowledgementgatepass/acknowledgementgatepass.component';
import { QrcheckComponent } from './qrcheck/qrcheck.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


@NgModule({
  declarations: [
    TransportgenerationComponent, 
    ViewtransportgenerationComponent, 
    AddedittransportgenerationComponent, 
    AcknowledgementgatepassComponent, 
    QrcheckComponent
  ],
  imports: [
    SharedModule,
    TransportgenerationRoutingModule,
    NgbModule,OwlDateTimeModule,OwlNativeDateTimeModule
  ]
})
export class TransportgenerationModule { }
