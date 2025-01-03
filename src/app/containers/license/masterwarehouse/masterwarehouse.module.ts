import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { MasterwarehouseRoutingModule } from './masterwarehouse-routing.module';


@NgModule({
  declarations: [AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MasterwarehouseRoutingModule
  ]
})
export class MasterwarehouseModule { }
