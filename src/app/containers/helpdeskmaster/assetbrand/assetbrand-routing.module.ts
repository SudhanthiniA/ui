import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetbrandsComponent } from './assetbrand.component';
import { AssetbrandComponent } from './addassetbrand/assetbrand.component';
import { ViewAssetbrandComponent } from './viewassetbrand/assetbrand.component';

const routes: Routes = [
  {
    path: 'list',
    component: AssetbrandsComponent
  },
  {
    path: 'add',
    component: AssetbrandComponent
  },
  {
    path: 'view',
    component: ViewAssetbrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetbrandRoutingModule { }
