import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {Mf4receivingwastageRoutingModule} from './mf4receivingwastage-routing.module';
import { Mf4receivingwastageComponent } from './mf4receivingwastage.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [Mf4receivingwastageComponent, ViewComponent],
  imports: [
    CommonModule,
    Mf4receivingwastageRoutingModule,
    SharedModule
  ]
})
export class Mf4receivingwastageModule { }
