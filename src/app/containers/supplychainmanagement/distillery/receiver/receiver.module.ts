import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { ReceiverRoutingModule } from './receiver-routing.module';
import { ReceiverComponent } from './receiver.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, ReceiverComponent],
  imports: [
    CommonModule,
    ReceiverRoutingModule,
    SharedModule
  ]
})
export class ReceiverModule { }
