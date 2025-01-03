import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { WholesaleRoutingModule } from './wholesale-routing.module';
import { WholesaleComponent } from './wholesale.component';
import { ViewComponent } from './view/view.component';
import {AddComponent} from './add/add.component'

@NgModule({
  declarations: [WholesaleComponent , ViewComponent,AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    WholesaleRoutingModule
  ]
})
export class WholesaleModule { }
