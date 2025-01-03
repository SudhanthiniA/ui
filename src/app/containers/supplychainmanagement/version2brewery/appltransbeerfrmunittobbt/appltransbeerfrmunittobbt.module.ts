import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AppltransbeerfrmunittobbtRoutingModule } from './appltransbeerfrmunittobbt-routing.module';
import { AppltransbeerfrmunittobbtComponent } from './appltransbeerfrmunittobbt.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AppltransbeerfrmunittobbtComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppltransbeerfrmunittobbtRoutingModule
  ]
})
export class AppltransbeerfrmunittobbtModule { }
