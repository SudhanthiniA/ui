import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { HelpdeskissuefromRoutingModule } from './helpdeskissuefrom-routing.module';
import { HelpdeskissuefromComponent } from './helpdeskissuefrom.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [HelpdeskissuefromComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    HelpdeskissuefromRoutingModule
  ]
})
export class HelpdeskissuefromModule { }
