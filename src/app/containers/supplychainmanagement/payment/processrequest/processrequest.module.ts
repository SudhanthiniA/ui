import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ProcessrequestRoutingModule } from './processrequest-routing.module';
import { ProcessrequestComponent } from './processrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [ProcessrequestComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    ProcessrequestRoutingModule,
    SharedModule
  ]
})
export class ProcessrequestModule { }
