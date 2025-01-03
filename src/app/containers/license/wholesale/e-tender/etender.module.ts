import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import {  EtenderRoutingModule} from './etender-routing.module';
import { ViewComponent } from './view/view.component'
import { EtenderComponent } from './etender.component'


@NgModule({
  declarations: [ViewComponent,EtenderComponent],
  imports: [
    CommonModule,
    SharedModule,
    EtenderRoutingModule
  ]
})
export class EtenderModule { }
