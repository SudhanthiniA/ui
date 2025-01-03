import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MaprequestRoutingModule } from './maprequest-routing.module';
import { MaprequestComponent } from './maprequest.component';
import { ViewmaprequestComponent } from './viewmaprequest/viewmaprequest.component';

@NgModule({
  declarations: [MaprequestComponent, ViewmaprequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaprequestRoutingModule
  ]
})
export class MaprequestModule { }
