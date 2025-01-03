import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { HbrRoutingModule } from './hbr-routing.module';
import { HbrComponent } from './hbr.component';
import { ViewComponent } from './view/view.component';
import {AddComponent} from './add/add.component'

@NgModule({
  declarations: [HbrComponent , ViewComponent,AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    HbrRoutingModule
  ]
})
export class HbrModule { }
