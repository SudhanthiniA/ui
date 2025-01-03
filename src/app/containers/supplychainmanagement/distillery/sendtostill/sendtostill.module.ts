import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { SendtostillRoutingModule } from './sendtostill-routing.module';
import { SendtostillComponent } from './sendtostill.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, SendtostillComponent],
  imports: [
    CommonModule,
    SendtostillRoutingModule,
    SharedModule
  ]
})
export class SendtostillModule { }
