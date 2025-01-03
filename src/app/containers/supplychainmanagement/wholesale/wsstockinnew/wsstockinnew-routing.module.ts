import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WsstockinnewComponent } from './wsstockinnew.component';
import { AddwsstockinnewComponent } from './addwsstockinnew/addwsstockinnew.component';
import { ViewwsstockinnewComponent } from './viewwsstockinnew/viewwsstockinnew.component';
import { QrscanwsstockinnewComponent } from './qrscanwsstockinnew/qrscanwsstockinnew.component';
import { PreviewdamagemissingComponent } from './previewdamagemissing/previewdamagemissing.component';

const routes: Routes = [
  { path: 'list', component: WsstockinnewComponent },

  {
    path: 'add',
    component: AddwsstockinnewComponent
  },
  {
    path: 'qrscan',
    component: QrscanwsstockinnewComponent
  },
  {
    path: 'view',
    component: ViewwsstockinnewComponent
  },
  {
    path: 'add/:id',
    component: AddwsstockinnewComponent
  },
  {
    path: 'preview',
    component: PreviewdamagemissingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WsstockinnewRoutingModule { }
