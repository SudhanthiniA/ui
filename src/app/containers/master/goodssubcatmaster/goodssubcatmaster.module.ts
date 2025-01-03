import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { GoodssubcatmasterRoutingModule } from './/goodssubcatmaster-routing.module';
import { GoodssubcatmasterComponent } from './goodssubcatmaster.component';
import { AddgoodssubcatmasterComponent } from './addgoodssubcatmaster/addgoodssubcatmaster.component';
import { ViewgoodssubcatmasterComponent } from './viewgoodssubcatmaster/viewgoodssubcatmaster.component';

@NgModule({
  declarations: [GoodssubcatmasterComponent, AddgoodssubcatmasterComponent, ViewgoodssubcatmasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    GoodssubcatmasterRoutingModule
  ]
})
export class GoodssubcatmasterModule { }
