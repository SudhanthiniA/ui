import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MaprequestRoutingModule } from './maprequest-routing.module';
import { MaprequestComponent } from './maprequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [MaprequestComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaprequestRoutingModule
  ]
})
export class MaprequestModule { }
