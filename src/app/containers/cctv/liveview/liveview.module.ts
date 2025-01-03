import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { LiveviewRoutingModule } from './liveview-routing.module';
import { LiveviewComponent } from './liveview.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [LiveviewComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    LiveviewRoutingModule,
    SharedModule
  ]
})
export class LiveviewModule { }
