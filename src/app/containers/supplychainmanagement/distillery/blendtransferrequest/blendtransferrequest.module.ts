import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { BlendtransferrequestRoutingModule } from './blendtransferrequest-routing.module';
import { BlendtransferrequestComponent } from './blendtransferrequest.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, BlendtransferrequestComponent],
  imports: [
    CommonModule,
    BlendtransferrequestRoutingModule,
    SharedModule
  ]
})
export class BlendtransferrequestModule { }
