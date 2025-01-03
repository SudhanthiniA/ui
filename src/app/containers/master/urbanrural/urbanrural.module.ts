import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UrbanruralRoutingModule } from './urbanrural-routing.module';
import { UrbanruralComponent } from './urbanrural.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [UrbanruralComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    UrbanruralRoutingModule
  ]
})
export class UrbanruralModule { }
