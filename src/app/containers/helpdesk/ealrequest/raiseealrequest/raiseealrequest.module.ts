import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RaiseealrequestComponent } from './raiseealrequest.component';
import { ViewComponent } from './view/view.component';
import {RaiseealrequestRoutingModule} from './raiseealrequest-routing.module';


@NgModule({
  declarations: [RaiseealrequestComponent, ViewComponent],
  imports: [
    CommonModule,
    RaiseealrequestRoutingModule,
    SharedModule
  ]
})
export class RaiseealrequestModule { }
