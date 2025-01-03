import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { BrandlabeloverviewwhRoutingModule } from './brandlabeloverviewwh-routing.module';
import { BrandlabeloverviewwhComponent } from './brandlabeloverviewwh.component';
import { ViewbrandlabeloverviewwhComponent } from './viewbrandlabeloverviewwh/viewbrandlabeloverviewwh.component';

@NgModule({
  declarations: [BrandlabeloverviewwhComponent, ViewbrandlabeloverviewwhComponent],
  imports: [
    CommonModule,
    BrandlabeloverviewwhRoutingModule,
    SharedModule
  ]
})
export class BrandlabeloverviewwhModule { }
