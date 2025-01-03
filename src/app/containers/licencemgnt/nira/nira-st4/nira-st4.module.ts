import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NiraSt4RoutingModule } from './nira-st4-routing.module';
import { AddniraSt4Component } from './addnira-st4/addnira-st4.component';
import { ViewniraSt4Component } from './viewnira-st4/viewnira-st4.component';
import { NiraSt4Component } from './nira-st4.component';


@NgModule({
  declarations: [AddniraSt4Component,ViewniraSt4Component, NiraSt4Component],
  imports: [
    CommonModule,
    SharedModule,
    NiraSt4RoutingModule
  ]
})
export class NiraSt4Module { }
