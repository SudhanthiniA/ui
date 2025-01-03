import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AssetbrandsComponent } from './assetbrand.component';
import { AssetbrandRoutingModule } from './assetbrand-routing.module';
import { AssetbrandComponent } from './addassetbrand/assetbrand.component';
import { ViewAssetbrandComponent } from './viewassetbrand/assetbrand.component';

@NgModule({
  declarations: [AssetbrandsComponent, AssetbrandComponent, ViewAssetbrandComponent],
  imports: [
    CommonModule,
    SharedModule,
    AssetbrandRoutingModule
  ]
})
export class AssetsbrandModule { }
