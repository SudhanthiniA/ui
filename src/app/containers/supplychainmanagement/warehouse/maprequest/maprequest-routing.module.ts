import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaprequestComponent } from './maprequest.component';
import { ViewmaprequestComponent } from './viewmaprequest/viewmaprequest.component';

const routes: Routes = [
  {
    path: 'list',
    component: MaprequestComponent
  },
  {
    path: 'view',
    component: ViewmaprequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaprequestRoutingModule { }
