import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EthanolindentComponent } from './ethanolindent.component';
import { AddethanolindentComponent } from './addethanolindent/addethanolindent.component';
import { ViewethanolindentComponent } from './viewethanolindent/viewethanolindent.component';

const routes: Routes = [
  {
    path : 'list',
    component : EthanolindentComponent
  },
  {
    path: 'add',
    component : AddethanolindentComponent
  },
  {
    path: 'view',
    component : ViewethanolindentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EthanolindentRoutingModule { }
