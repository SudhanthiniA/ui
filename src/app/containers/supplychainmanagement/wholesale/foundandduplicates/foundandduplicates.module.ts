import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { FoundandduplicatesRoutingModule } from './foundandduplicates-routing.module';
import { FoundandduplicatesComponent } from './foundandduplicates.component';
import { ViewfoundandduplicatesComponent } from './viewfoundandduplicates/viewfoundandduplicates.component';

@NgModule({
  declarations: [FoundandduplicatesComponent, ViewfoundandduplicatesComponent],
  imports: [
    CommonModule,
    SharedModule,
    FoundandduplicatesRoutingModule
  ]
})
export class FoundandduplicatesModule { }
