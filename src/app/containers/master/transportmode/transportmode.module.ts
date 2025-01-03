import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module'; 
import { TransportmodeComponent } from './transportmode.component';
import { AddtransportmodeComponent } from './addtransportmode/addtransportmode.component';
import { ViewtransportmodeComponent } from './viewtransportmode/viewtransportmode.component'; 
import { TransportmodeRoutingModule } from './transportmode-routing.module';
 
@NgModule({
  declarations: [
    TransportmodeComponent,
    AddtransportmodeComponent,
    ViewtransportmodeComponent
  ],
  imports: [
    CommonModule,
    TransportmodeRoutingModule,
    SharedModule
  ]
})
export class TransportmodeModule { }
