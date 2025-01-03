import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AppfortransbeerfilterationRoutingModule } from './appfortransbeerfilteration-routing.module';
import { AppfortransbeerfilterationComponent } from './appfortransbeerfilteration.component';
import { AddappfortransbeerfilterationComponent } from './addappfortransbeerfilteration/addappfortransbeerfilteration.component';
import { ViewappfortransbeerfilterationComponent } from './viewappfortransbeerfilteration/viewappfortransbeerfilteration.component';

@NgModule({
  declarations: [AppfortransbeerfilterationComponent, AddappfortransbeerfilterationComponent, ViewappfortransbeerfilterationComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppfortransbeerfilterationRoutingModule
  ]
})
export class AppfortransbeerfilterationModule { }
