import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DispatchRoutingModule } from './dispatch-routing.module';
import { DispatchComponent } from './dispatch.component';
import { AddeditdispatchComponent } from './addeditdispatch/addeditdispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';

@NgModule({
  declarations: [ DispatchComponent, AddeditdispatchComponent, ViewdispatchComponent],
  imports: [
    CommonModule,
    SharedModule,
    DispatchRoutingModule,
    NgbModule
  ]
})
export class DispatchModule { }
