import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RequestforqrcodecasecodeComponent } from './requestforqrcodecasecode.component';
import {RequestforqrcodecasecodeRoutingModule } from './requestforqrcodecasecode-routing.module';



@NgModule({
  declarations: [AddComponent, ViewComponent,RequestforqrcodecasecodeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RequestforqrcodecasecodeRoutingModule
  ]
})
export class RequestforqrcodecasecodeModule { }
