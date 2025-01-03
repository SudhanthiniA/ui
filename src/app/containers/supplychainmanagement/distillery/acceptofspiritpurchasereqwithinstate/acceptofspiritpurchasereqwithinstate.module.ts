import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { AcceptofspiritpurchasereqwithinstateRoutingModule } from './acceptofspiritpurchasereqwithinstate-routing.module';

import { AcceptofspiritpurchasereqwithinstateComponent } from './acceptofspiritpurchasereqwithinstate.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AcceptofspiritpurchasereqwithinstateComponent, ViewComponent],
  imports: [
    CommonModule,
    AcceptofspiritpurchasereqwithinstateRoutingModule,
    SharedModule
  ]
})
export class AcceptofspiritpurchasereqwithinstateModule { }
