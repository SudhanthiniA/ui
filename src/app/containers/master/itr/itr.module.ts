import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ItrRoutingModule } from './itr-routing.module';
import { ItrComponent } from './itr.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ItrComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ItrRoutingModule
  ]
})
export class ItrModule { }
