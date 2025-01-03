import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {SalereturnreportnewRoutingModule} from './salereturnreportnew-routing.module';
import { SalereturnreportnewComponent } from './salereturnreportnew.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [SalereturnreportnewComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SalereturnreportnewRoutingModule
  ]
})
export class SalereturnreportnewModule { }
