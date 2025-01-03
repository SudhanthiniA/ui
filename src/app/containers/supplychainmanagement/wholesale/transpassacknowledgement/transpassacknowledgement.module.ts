import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TranspassacknowledgementRoutingModule } from './transpassacknowledgement-routing.module';
import { TranspassacknowledgementComponent } from './transpassacknowledgement.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [TranspassacknowledgementComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranspassacknowledgementRoutingModule
  ]
})
export class TranspassacknowledgementModule { }
