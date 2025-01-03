import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@appThemeShared/shared.module';

import { EventandalarmRoutingModule } from './eventandalarm-routing.module';
import { EventandalarmComponent } from './eventandalarm.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [EventandalarmComponent, ViewComponent],
  imports: [
    CommonModule,
    EventandalarmRoutingModule,
    SharedModule
  ]
})
export class EventandalarmModule { }
