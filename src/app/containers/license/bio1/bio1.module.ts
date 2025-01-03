import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { Bio1RoutingModule } from './bio1-routing.module';
import { Bio1Component } from './bio1.component';
import { Viewbio1Component } from './viewbio1/viewbio1.component';


@NgModule({
  declarations: [Bio1Component, Viewbio1Component],
  imports: [
    Bio1RoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class Bio1Module { }
