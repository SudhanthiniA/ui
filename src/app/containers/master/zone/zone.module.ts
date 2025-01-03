import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { ZoneRoutingModule } from './zone-routing.module';
import { ZoneComponent } from './zone.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ZoneComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ZoneRoutingModule
  ]
})
export class ZoneModule { }
