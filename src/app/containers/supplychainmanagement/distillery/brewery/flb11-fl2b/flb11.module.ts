import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Flb11RoutingModule } from './flb11-routing.module';
import { Flb11Component } from './flb11.component';
import { Addflb11Component } from './addflb11/addflb11.component';
import { Viewflb11Component } from './viewflb11/viewflb11.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { DraftfinalpasslistComponent } from './draftfinalpasslist/draftfinalpasslist.component';



@NgModule({
  declarations: [Flb11Component, Addflb11Component, Viewflb11Component, AcknowledgementComponent, DraftfinalpasslistComponent],
  imports: [
    CommonModule,
    SharedModule,
    Flb11RoutingModule
  ]
})
export class Flb11Module { }
