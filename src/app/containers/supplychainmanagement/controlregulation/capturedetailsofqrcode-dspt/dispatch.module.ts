import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DispatchRoutingModule } from './dispatch-routing.module';
import { DispatchComponent } from './dispatch.component';
import { AdddispatchComponent } from './adddispatch/adddispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';

@NgModule({
  declarations: [DispatchComponent, AdddispatchComponent, ViewdispatchComponent],
  imports: [
    CommonModule,
    SharedModule,
    DispatchRoutingModule
  ]
})
export class DispatchModule { }
