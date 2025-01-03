import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TransportpassgenerationRoutingModule } from './transportpassgeneration-routing.module';
import { TransportpassgenerationComponent } from './transportpassgeneration.component';
import { AddtransportpassgenerationComponent } from './addtransportpassgeneration/addtransportpassgeneration.component';
import { ViewtransportpassgenerationComponent } from './viewtransportpassgeneration/viewtransportpassgeneration.component';
import { PreviewtransportpassgenerationComponent } from './previewtransportpassgeneration/previewtransportpassgeneration.component';


@NgModule({
  declarations: [TransportpassgenerationComponent, AddtransportpassgenerationComponent, ViewtransportpassgenerationComponent, PreviewtransportpassgenerationComponent],
  imports: [
    CommonModule,
    TransportpassgenerationRoutingModule,
    SharedModule
  ]
})
export class TransportpassgenerationModule { }
