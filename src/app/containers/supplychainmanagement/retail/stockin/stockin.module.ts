import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { StockinRoutingModule } from './stockin-routing.module';
import { StockinComponent } from './stockin.component';
import { StockinqrscanComponent } from './stockinqrscan/stockinqrscan.component';
import { AddstockinComponent } from './addstockin/addstockin.component';
import { ViewstockinComponent } from './viewstockin/viewstockin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [StockinComponent, StockinqrscanComponent, AddstockinComponent, ViewstockinComponent],
  imports: [
    CommonModule,
    StockinRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class StockinModule { }
