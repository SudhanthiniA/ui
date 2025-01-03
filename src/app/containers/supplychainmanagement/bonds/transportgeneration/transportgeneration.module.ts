import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TransportgenerationRoutingModule } from './transportgeneration-routing.module';
import { TransportgenerationComponent } from './transportgeneration.component';
import { ViewtransportgenerationComponent } from './viewtransportgeneration/viewtransportgeneration.component';

@NgModule({
  declarations: [ TransportgenerationComponent, ViewtransportgenerationComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransportgenerationRoutingModule,
    NgbModule
  ]
})
export class TransportgenerationModule { }
