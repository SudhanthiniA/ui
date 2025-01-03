import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { BrandlabeloverviewRoutingModule } from './brandlabeloverview-routing.module';
import { BrandlabeloverviewComponent } from './brandlabeloverview.component';
import { ViewbrandlabeloverviewComponent } from './viewbrandlabeloverview/viewbrandlabeloverview.component';

@NgModule({
  declarations: [BrandlabeloverviewComponent, ViewbrandlabeloverviewComponent],
  imports: [
    CommonModule,
    BrandlabeloverviewRoutingModule,
    SharedModule
  ]
})
export class BrandlabeloverviewModule { }
