import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottlinglinerepairRoutingModule } from './bottlinglinerepair-routing.module';
import { BottlinglinerepairComponent } from './bottlinglinerepair.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [BottlinglinerepairComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlinglinerepairRoutingModule
  ]
})
export class BottlinglinerepairModule { }
