import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AssetassignComponent } from './assetassign.component';
import { AssetassignRoutingModule } from './assetassign-routing.module';
import { AddassetassignComponent } from './addassetassign/addassetassign.component';
import { ViewassetassignComponent } from './viewassetassign/viewassetassign.component';

@NgModule({
  declarations: [AssetassignComponent, AddassetassignComponent, ViewassetassignComponent],
  imports: [
    CommonModule,
    SharedModule,
    AssetassignRoutingModule
  ]
})
export class AssetassignModule { }
