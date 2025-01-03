import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DeoscreenformgrRoutingModule } from './deoscreenformgr-routing.module'
import { DeoscreenformgrComponent } from './deoscreenformgr.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [DeoscreenformgrComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DeoscreenformgrRoutingModule
  ]
})
export class DeoscreenformgrModule { }
