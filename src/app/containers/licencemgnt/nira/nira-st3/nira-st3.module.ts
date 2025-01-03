import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NiraSt3RoutingModule } from './nira-st3-routing.module';
import { AddniraSt3Component } from './addnira-st3/addnira-st3.component';
import { ViewniraSt3Component } from './viewnira-st3/viewnira-st3.component';
import { NiraSt3Component } from './nira-st3.component';


@NgModule({
  declarations: [AddniraSt3Component,ViewniraSt3Component, NiraSt3Component],
  imports: [
    CommonModule,
    SharedModule,
    NiraSt3RoutingModule
  ]
})
export class NiraSt3Module { }
