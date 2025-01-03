import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { FinishedgoodsComponent } from './finishedgoods.component';
import { FinishedgoodsRoutingModule } from './finishedgoods-routing.module';


@NgModule({
  declarations: [FinishedgoodsComponent],
  imports: [
    CommonModule,
    FinishedgoodsRoutingModule,
    SharedModule
  ]
})
export class FinishedgoodsModule { }
