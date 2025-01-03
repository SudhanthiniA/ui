import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SheeranidhiRoutingModule } from './sheeranidhi-routing.module';
import { SheeranidhiComponent } from './sheeranidhi.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [SheeranidhiComponent, AddComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    SheeranidhiRoutingModule
  ]
})
export class SheeranidhiModule { }
