import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockinhandparentunitRoutingModule } from './stockinhandparentunit-routing.module';
import { StockinhandparentunitComponent } from './stockinhandparentunit.component';
import { ViewstockinhandparentunitComponent } from './viewstockinhandparentunit/viewstockinhandparentunit.component';

@NgModule({
  declarations: [StockinhandparentunitComponent, ViewstockinhandparentunitComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockinhandparentunitRoutingModule
  ]
})
export class StockinhandparentunitModule { }
