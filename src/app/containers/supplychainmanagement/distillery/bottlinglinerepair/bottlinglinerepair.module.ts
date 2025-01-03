import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { BottlinglinerepairRoutingModule } from './bottlinglinerepair-routing.module';
import { BottlinglinerepairComponent } from './bottlinglinerepair.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [BottlinglinerepairComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlinglinerepairRoutingModule
  ]
})
export class BottlinglinerepairModule { }
