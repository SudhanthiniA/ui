import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BondwarehouseRoutingModule } from './bondwarehouse-routing.module';
import { BondwarehouseComponent } from './bondwarehouse.component';
import { ViewComponent } from './view/view.component';
import {AddComponent} from './add/add.component'

@NgModule({
  declarations: [BondwarehouseComponent , ViewComponent,AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    BondwarehouseRoutingModule
  ]
})
export class BondwarehouseModule { }
