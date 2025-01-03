import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AtlabRoutingModule } from './atlab-routing.module';
import { AtlabComponent } from './atlab.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AtlabComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AtlabRoutingModule
  ]
})
export class AtlabModule { }
