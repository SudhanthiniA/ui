import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { Id3RoutingModule } from './id3-routing.module';
import { Viewid3Component } from './viewid3/viewid3.component';
import { Id3Component } from './id3.component';


@NgModule({
  declarations: [Viewid3Component, Id3Component],
  imports: [
    CommonModule,
    SharedModule,
    Id3RoutingModule
  ]
})
export class Id3Module { }
