import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { St2RoutingModule } from './st2-routing.module';
import { Viewst2Component } from './viewst2/viewst2.component';
import { St2Component } from './st2.component';


@NgModule({
  declarations: [Viewst2Component, St2Component],
  imports: [
    CommonModule,
    SharedModule,
    St2RoutingModule
  ]
})
export class St2Module { }
