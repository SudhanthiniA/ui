import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { SpiritpurchasereqwithinstateRoutingModule } from './spiritpurchasereqwithinstate-routing.module';
import { SpiritpurchasereqwithinstateComponent } from './spiritpurchasereqwithinstate.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { AddtwoComponent } from './addtwo/addtwo.component';

@NgModule({
  declarations: [SpiritpurchasereqwithinstateComponent, AddComponent, ViewComponent, ListComponent, AddtwoComponent],
  imports: [
    CommonModule,
    SpiritpurchasereqwithinstateRoutingModule,
    SharedModule
  ]
})
export class SpiritpurchasereqwithinstateModule { }
