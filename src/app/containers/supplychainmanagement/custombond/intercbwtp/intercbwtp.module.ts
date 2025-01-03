import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IntercbwtpRoutingModule } from './intercbwtp-routing.module';
import { IntercbwtpComponent } from './intercbwtp.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [IntercbwtpComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IntercbwtpRoutingModule
  ]
})
export class IntercbwtpModule { }
