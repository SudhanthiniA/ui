import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module'; 
import { BrandComponent } from './brand.component';
import { AddbrandComponent } from './addbrand/addbrand.component';
import { ViewbrandComponent } from './viewbrand/viewbrand.component';
import { BrandRoutingModule } from './brand-routing.module';

@NgModule({
  declarations: [
    BrandComponent,
    AddbrandComponent,
    ViewbrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    SharedModule
  ]
})
export class BrandModule { }
