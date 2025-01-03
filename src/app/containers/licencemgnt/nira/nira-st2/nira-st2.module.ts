import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NiraSt2RoutingModule } from './nira-st2-routing.module';
import { AddniraSt2Component } from './addnira-st2/addnira-st2.component';
import { ViewniraSt2Component } from './viewnira-st2/viewnira-st2.component';
import { NiraSt2Component } from './nira-st2.component';


@NgModule({
  declarations: [AddniraSt2Component,ViewniraSt2Component, NiraSt2Component],
  imports: [
    CommonModule,
    SharedModule,
    NiraSt2RoutingModule
  ]
})
export class NiraSt2Module { }
