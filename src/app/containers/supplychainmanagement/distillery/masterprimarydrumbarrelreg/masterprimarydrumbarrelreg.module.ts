import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import {MasterprimarydrumbarrelregRoutingModule} from './masterprimarydrumbarrelreg-routing.module';
import { MasterprimarydrumbarrelregComponent } from './masterprimarydrumbarrelreg.component';

@NgModule({
  declarations: [MasterprimarydrumbarrelregComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MasterprimarydrumbarrelregRoutingModule
  ]
})
export class MasterprimarydrumbarrelregModule { }
