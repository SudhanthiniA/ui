import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { ReturntpwithinupComponent } from './returntpwithinup.component';
import { AddComponent } from './add/add.component';
import {  ViewComponent } from './view/view.component';
import { ReturntpwithinupRoutingModule } from './returntpwithinup-routing.module';
@NgModule({
  declarations: [
    ReturntpwithinupComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReturntpwithinupRoutingModule
  ]
})
export class ReturntpwithinupModule { }
