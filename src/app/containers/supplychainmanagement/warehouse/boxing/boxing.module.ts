import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxingRoutingModule } from './boxing-routing.module';
import { BoxingComponent } from './boxing.component';
import { AddboxingComponent } from './addboxing/addboxing.component';
import { ViewboxingComponent } from './viewboxing/viewboxing.component';
import { SharedModule } from '@app/theme/shared/shared.module';


@NgModule({
  declarations: [BoxingComponent, AddboxingComponent, ViewboxingComponent],
  imports: [
    CommonModule,
    BoxingRoutingModule,
    SharedModule
  ]
})
export class BoxingModule { }
