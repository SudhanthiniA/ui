import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertRoutingModule } from './alert-routing.module';
import { SharedModule } from '@app/theme/shared/shared.module';
import { AlertComponent } from './alert.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [AlertComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlertRoutingModule
  ]
})
export class AlertModule { }
