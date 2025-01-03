import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MovementoffinishedgoodsRoutingModule } from './movementoffinishedgoods-routing.module';
import { MovementoffinishedgoodsComponent } from './movementoffinishedgoods.component';
import { AddmovementoffinishedgoodsComponent } from './addmovementoffinishedgoods/addmovementoffinishedgoods.component';
import { ViewmovementoffinishedgoodsComponent } from './viewmovementoffinishedgoods/viewmovementoffinishedgoods.component';


@NgModule({
  declarations: [MovementoffinishedgoodsComponent, AddmovementoffinishedgoodsComponent, ViewmovementoffinishedgoodsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MovementoffinishedgoodsRoutingModule
  ]
})
export class MovementoffinishedgoodsModule { }
