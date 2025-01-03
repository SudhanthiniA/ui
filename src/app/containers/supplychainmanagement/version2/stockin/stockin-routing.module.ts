import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinComponent } from './stockin.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PreviewComponent } from './preview/preview.component';


const routes: Routes = [
  {
    path : 'list',
    component : StockinComponent
  },
  {
    path : 'add',
    component : AddComponent
  },
  {
    path : 'view',
    component : ViewComponent
  },
  {
    path : 'preview',
    component : PreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinRoutingModule { }
