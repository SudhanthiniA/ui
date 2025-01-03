import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EthanolorderComponent } from './ethanolorder.component';
import { AddethanolorderComponent } from './addethanolorder/addethanolorder.component';
import { ViewethanolorderComponent } from './viewethanolorder/viewethanolorder.component';

const routes: Routes = [
  {
    path : 'list',
    component : EthanolorderComponent
  },
  {
    path: 'add',
    component : AddethanolorderComponent
  },
  {
    path: 'view',
    component : ViewethanolorderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EthanolorderRoutingModule { }
