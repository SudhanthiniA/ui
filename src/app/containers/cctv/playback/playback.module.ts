import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@appThemeShared/shared.module';
import { PlaybackRoutingModule } from './playback-routing.module';
import { PlaybackComponent } from './playback.component';

@NgModule({
  declarations: [PlaybackComponent],
  imports: [
    CommonModule,
    SharedModule,
    PlaybackRoutingModule
  ]
})
export class PlaybackModule { }
