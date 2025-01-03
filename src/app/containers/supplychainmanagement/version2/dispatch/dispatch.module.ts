import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DispatchRoutingModule } from './dispatch-routing.module';
import { DispatchComponent } from './dispatch.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [DispatchComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    DispatchRoutingModule,
    SharedModule
  ]
})
export class DispatchModule { }
