import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {ExpirybrandreportRoutingModule} from './expirybrandreport-routing.module';
import { ExpirybrandreportComponent } from './expirybrandreport.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ExpirybrandreportComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    ExpirybrandreportRoutingModule,
    SharedModule
  ]
})
export class ExpirybrandreportModule { }
