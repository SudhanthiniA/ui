import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TestproducttypeRoutingModule } from './testproducttype-routing.module';
import { TestproducttypeComponent } from './testproducttype.component';
import { AddtestproducttypeComponent } from './addtestproducttype/addtestproducttype.component';
import { ViewtestproducttypeComponent } from './viewtestproducttype/viewtestproducttype.component';


@NgModule({
  declarations: [
    TestproducttypeComponent, AddtestproducttypeComponent, ViewtestproducttypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    TestproducttypeRoutingModule
  ]
})
export class TestproducttypeModule { }
