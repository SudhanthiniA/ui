import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { FinaltransportpassRoutingModule } from './finaltransportpass-routing.module';
import { FinaltransportpassComponent } from './finaltransportpass.component';
import { ViewfinaltransportpassComponent } from './viewfinaltransportpass/viewfinaltransportpass.component';

@NgModule({
  declarations: [FinaltransportpassComponent, ViewfinaltransportpassComponent],
  imports: [
    CommonModule,
    SharedModule,
    FinaltransportpassRoutingModule
  ]
})
export class FinaltransportpassModule { } 
