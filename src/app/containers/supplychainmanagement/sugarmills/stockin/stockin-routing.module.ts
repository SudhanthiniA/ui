import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinComponent } from './stockin.component';
import { AddeditstockinComponent } from './addeditstockin/addeditstockin.component';
import { ViewstockinComponent } from './viewstockin/viewstockin.component';
import { PreviewstockComponent } from './previewstock/previewstock.component';

const routes: Routes = [
  {
    path : 'list',
    component : StockinComponent
  },
  {
    path : 'add',
    component : AddeditstockinComponent
  },
  {
    path: 'edit/:Id',
    component: AddeditstockinComponent
  },
  {
    path: 'view/:Id',
    component: ViewstockinComponent
  },
  {
    path: 'preview',
    component: PreviewstockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinRoutingModule { }
