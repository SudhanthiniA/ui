import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SectorRoutingModule } from './sector-routing.module';
import { SectorComponent } from './sector.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [SectorComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SectorRoutingModule
  ]
})
export class SectorModule { }
