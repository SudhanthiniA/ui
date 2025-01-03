import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AlertComponent } from './alert.component';
import {AlertRoutingModule} from './alert-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AlertComponent,ViewComponent],
  imports: [
    CommonModule,
    AlertRoutingModule,
    SharedModule
  ]
})
export class AlertModule { }
