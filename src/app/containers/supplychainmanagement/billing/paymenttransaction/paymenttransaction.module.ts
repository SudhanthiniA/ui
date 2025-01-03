import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {PaymenttransactionRoutingModule} from './paymenttransaction-routing.module';
import { PaymenttransactionComponent } from './paymenttransaction.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [PaymenttransactionComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PaymenttransactionRoutingModule
  ]
})
export class  PaymenttransactionModule { }
