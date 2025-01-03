import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetassignComponent } from './assetassign.component';
import { AddassetassignComponent } from './addassetassign/addassetassign.component';
import { ViewassetassignComponent } from './viewassetassign/viewassetassign.component';

const routes: Routes = [
  {
    path: 'list',
    component: AssetassignComponent
  },
  {
    path: 'add',
    component: AddassetassignComponent
  },
  {
    path: 'view',
    component: ViewassetassignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetassignRoutingModule { }
