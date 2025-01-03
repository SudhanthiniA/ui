import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { StockinhandRoutingModule } from './stockinhand-routing.module';
import { StockinhandComponent } from './stockinhand.component';


@NgModule({
  declarations: [StockinhandComponent],
  imports: [
    CommonModule,
    StockinhandRoutingModule,
    SharedModule
  ]
})
export class StockinhandModule { }
