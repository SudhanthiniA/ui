import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventandalarmComponent } from './eventandalarm.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'list',
    component: EventandalarmComponent
  },
  {
    path: 'view',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventandalarmRoutingModule { }
