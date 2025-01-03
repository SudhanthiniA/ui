import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd21Component } from './pd21.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {Pd21RoutingModule} from './pd21-routing.module';
import { ApprovalComponent } from './approval/approval.component';

@NgModule({
  declarations: [Pd21Component, AddComponent, ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd21RoutingModule
  ]
})
export class Pd21Module { }
