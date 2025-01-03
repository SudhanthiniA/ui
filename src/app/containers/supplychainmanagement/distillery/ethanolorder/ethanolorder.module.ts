import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { EthanolorderRoutingModule } from './ethanolorder-routing.module';
import { EthanolorderComponent } from './ethanolorder.component';
import { AddethanolorderComponent } from './addethanolorder/addethanolorder.component';
import { ViewethanolorderComponent } from './viewethanolorder/viewethanolorder.component';

@NgModule({
  declarations: [EthanolorderComponent, AddethanolorderComponent, ViewethanolorderComponent],
  imports: [
    CommonModule,
    SharedModule,
    EthanolorderRoutingModule
  ]
})
export class EthanolorderModule { }
