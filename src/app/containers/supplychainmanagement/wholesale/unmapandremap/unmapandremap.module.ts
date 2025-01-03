import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UnmapandremapRoutingModule } from './unmapandremap-routing.module';
import { UnmapandremapComponent } from './unmapandremap.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [UnmapandremapComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    UnmapandremapRoutingModule
  ]
})
export class UnmapandremapModule { }
