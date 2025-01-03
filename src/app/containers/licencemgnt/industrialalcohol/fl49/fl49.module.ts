import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Fl49Component } from './fl49.component';
import { Fl49RoutingModule } from './fl49-routing.module';

@NgModule({
  declarations: [Fl49Component],
  imports: [
    CommonModule,
    SharedModule,
    Fl49RoutingModule
  ]
})
export class Fl49Module { }
