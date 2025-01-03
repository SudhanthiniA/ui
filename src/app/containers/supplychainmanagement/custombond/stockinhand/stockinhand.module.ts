import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockinhandRoutingModule } from './stockinhand-routing.module';
import { StockinhandComponent } from './stockinhand.component';
import { ViewstockinhandComponent } from './viewstockinhand/viewstockinhand.component';

@NgModule({
  declarations: [StockinhandComponent, ViewstockinhandComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockinhandRoutingModule
  ]
})
export class StockinhandModule { }
