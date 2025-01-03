import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BoxingComponent } from './boxing.component';
import { BoxingRoutingModule } from './boxing-routing.module';
import { AddboxingComponent } from './addboxing/addboxing.component';
import { ViewboxingComponent } from './viewboxing/viewboxing.component';


@NgModule({
  declarations: [BoxingComponent, AddboxingComponent, ViewboxingComponent],
  imports: [
    CommonModule,
    BoxingRoutingModule,
    SharedModule
  ]
})
export class BoxingModule { }
