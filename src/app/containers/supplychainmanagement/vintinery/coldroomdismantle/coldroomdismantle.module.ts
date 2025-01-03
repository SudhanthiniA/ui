import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {ColdroomdismantleRoutingModule} from './coldroomdismantle-routing.module';
import { ColdroomdismantleComponent } from './coldroomdismantle.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ColdroomdismantleComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ColdroomdismantleRoutingModule
  ]
})
export class ColdroomdismantleModule { }
