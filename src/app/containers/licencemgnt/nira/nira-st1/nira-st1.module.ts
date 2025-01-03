import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NiraSt1RoutingModule } from './nira-st1-routing.module';
import { AddniraSt1Component } from './addnira-st1/addnira-st1.component';
import { ViewniraSt1Component } from './viewnira-st1/viewnira-st1.component';
import { NiraSt1Component } from './nira-st1.component';


@NgModule({
  declarations: [AddniraSt1Component,ViewniraSt1Component, NiraSt1Component],
  imports: [
    CommonModule,
    SharedModule,
    NiraSt1RoutingModule
  ]
})
export class NiraSt1Module { }
