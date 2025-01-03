import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TransportpassparentunitRoutingModule } from './transportpassparentunit-routing.module';
import { TransportpassparentunitComponent } from './transportpassparentunit.component';
import { AddtransportpassparentunitComponent } from './addtransportpassparentunit/addtransportpassparentunit.component';
import { ViewtransportpassparentunitComponent } from './viewtransportpassparentunit/viewtransportpassparentunit.component';
import { EdittransportpassparentunitComponent } from './edittransportpassparentunit/edittransportpassparentunit.component';

@NgModule({
  declarations: [TransportpassparentunitComponent, AddtransportpassparentunitComponent, ViewtransportpassparentunitComponent, EdittransportpassparentunitComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransportpassparentunitRoutingModule
  ]
})
export class TransportpassparentunitModule { }
