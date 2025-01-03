import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaybackComponent } from './playback.component';

const routes: Routes = [
  {
    path: 'list',
    component: PlaybackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaybackRoutingModule { }
