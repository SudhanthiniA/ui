import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BeerliftingcompareRoutingModule } from './beerliftingcompare-routing.module';
import { BeerliftingcompareComponent } from './beerliftingcompare.component';

@NgModule({
  declarations: [BeerliftingcompareComponent],
  imports: [
    CommonModule,
    SharedModule,
    BeerliftingcompareRoutingModule
  ]
})
export class BeerliftingcompareModule { }
