import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DistrictmapRoutingModule } from './districtmap-routing.module';
import { DistrictmapComponent } from './districtmap.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [DistrictmapComponent,
  AddComponent,
  ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DistrictmapRoutingModule
  ]
})
export class DistrictmapModule { }
