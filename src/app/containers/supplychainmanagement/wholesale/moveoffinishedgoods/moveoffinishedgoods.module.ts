import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MoveoffinishedgoodsRoutingModule } from './moveoffinishedgoods-routing.module';
import { MoveoffinishedgoodsComponent } from './moveoffinishedgoods.component';
import { AddmoveoffinishedgoodsComponent } from './addmoveoffinishedgoods/addmoveoffinishedgoods.component';
import { ViewmoveoffinishedgoodsComponent } from './viewmoveoffinishedgoods/viewmoveoffinishedgoods.component';


@NgModule({
  declarations: [MoveoffinishedgoodsComponent, AddmoveoffinishedgoodsComponent, ViewmoveoffinishedgoodsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MoveoffinishedgoodsRoutingModule
  ]
})
export class MoveoffinishedgoodsModule { }
