import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { MstistprocessRoutingModule } from './mstistprocess-routing.module';
import { MstistprocessComponent } from './mstistprocess.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, MstistprocessComponent],
  imports: [
    CommonModule,
    MstistprocessRoutingModule,
    SharedModule
  ]
})
export class MstistprocessModule { }
