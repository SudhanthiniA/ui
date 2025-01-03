import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwfoundandduplicatesRoutingModule } from './mwfoundandduplicates-routing.module';
import { MwfoundandduplicatesComponent } from './mwfoundandduplicates.component';
import { ViewmwfoundandduplicatesComponent } from './viewmwfoundandduplicates/viewmwfoundandduplicates.component';

@NgModule({
  declarations: [MwfoundandduplicatesComponent, ViewmwfoundandduplicatesComponent],
  imports: [
    CommonModule,
    MwfoundandduplicatesRoutingModule,
    SharedModule
  ]
})
export class MwfoundandduplicatesModule { }
