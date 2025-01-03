import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ReprtevidsubcompagnshpshoplicseeRoutingModule } from './reprtevidsubcompagnshpshoplicsee-routing.module';
import { ReprtevidsubcompagnshpshoplicseeComponent } from './reprtevidsubcompagnshpshoplicsee.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ReprtevidsubcompagnshpshoplicseeComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReprtevidsubcompagnshpshoplicseeRoutingModule
  ]
})
export class ReprtevidsubcompagnshpshoplicseeModule { }
