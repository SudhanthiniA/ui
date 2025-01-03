import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RolloveraddpageRoutingModule } from './rolloveraddpage-routing.module';
import { RolloveraddpageComponent } from './rolloveraddpage.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [RolloveraddpageComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    RolloveraddpageRoutingModule,
    SharedModule
  ]
})
export class RolloveraddpageModule { }
