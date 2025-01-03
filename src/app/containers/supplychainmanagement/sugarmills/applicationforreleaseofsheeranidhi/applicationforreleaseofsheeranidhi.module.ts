import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {ApplicationforreleaseofsheeranidhiRoutingModule} from './applicationforreleaseofsheeranidhi-routing.module';
import { ApplicationforreleaseofsheeranidhiComponent } from './applicationforreleaseofsheeranidhi.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ApplicationforreleaseofsheeranidhiComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationforreleaseofsheeranidhiRoutingModule
  ]
})
export class ApplicationforreleaseofsheeranidhiModule { }
