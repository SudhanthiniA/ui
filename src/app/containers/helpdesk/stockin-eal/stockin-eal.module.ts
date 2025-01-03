import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { StockinEalRoutingModule } from './stockin-eal-routing.module';
import { StockinEalComponent } from './stockin-eal.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { UnmappedaddComponent } from './unmappedadd/unmappedadd.component';
import { UnmappedviewComponent } from './unmappedview/unmappedview.component';

@NgModule({
  declarations: [StockinEalComponent, AddComponent, ViewComponent, UnmappedaddComponent, UnmappedviewComponent],
  imports: [
    CommonModule,
    StockinEalRoutingModule,
    SharedModule
  ]
})
export class StockinEalModule { }
