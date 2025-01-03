import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {SalereturnRoutingModule} from './salereturn-routing.module';
import { SalereturnComponent } from './salereturn.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [SalereturnComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SalereturnRoutingModule,
    SharedModule
  ]
})
export class SalereturnModule { }
