import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ReqforgodownchangeRoutingModule } from './reqforgodownchange-routing.module';
import { ReqforgodownchangeComponent } from './reqforgodownchange.component';

@NgModule({
  declarations: [ReqforgodownchangeComponent],
  imports: [
    CommonModule,
    ReqforgodownchangeRoutingModule,
    SharedModule
  ]
})
export class ReqforgodownchangeModule { }
