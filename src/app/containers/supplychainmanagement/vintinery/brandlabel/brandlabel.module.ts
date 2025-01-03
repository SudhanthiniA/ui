import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BrandlabelRoutingModule } from './brandlabel-routing.module';
import { BrandlabelComponent } from './brandlabel.component';
import { AddbrandlabelComponent } from './addbrandlabel/addbrandlabel.component';
import { ViewbrandlabelComponent } from './viewbrandlabel/viewbrandlabel.component';


@NgModule({
  declarations: [BrandlabelComponent,AddbrandlabelComponent,ViewbrandlabelComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrandlabelRoutingModule
  ]
})
export class BrandlabelModule { }
