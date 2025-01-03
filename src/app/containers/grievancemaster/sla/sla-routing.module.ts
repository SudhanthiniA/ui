import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlaComponent } from './sla.component';
import { AddslaComponent } from './addsla/addsla.component';
import { ViewslaComponent } from './viewsla/viewsla.component';

const routes: Routes = [
  {
    path: 'list',
    component: SlaComponent
  },
  {
    path: 'add',
    component: AddslaComponent
  },
  {
    path: 'view',
    component: ViewslaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SlaRoutingModule { }
