import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RenewaltimelineRoutingModule } from './renewaltimeline-routing.module';
import { RenewaltimelineComponent } from './renewaltimeline.component';
import { AddrenewaltimelineComponent } from './addrenewaltimeline/addrenewaltimeline.component';
import { ViewrenewaltimelineComponent } from './viewrenewaltimeline/viewrenewaltimeline.component';

@NgModule({
  declarations: [
    RenewaltimelineComponent,
    AddrenewaltimelineComponent,
    ViewrenewaltimelineComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RenewaltimelineRoutingModule
  ]
})
export class RenewaltimelineModule { }
