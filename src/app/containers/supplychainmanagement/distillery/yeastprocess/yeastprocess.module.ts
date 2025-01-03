import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { YeastprocessRoutingModule } from './yeastprocess-routing.module';
import { YeastprocessComponent } from './yeastprocess.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, YeastprocessComponent],
  imports: [
    CommonModule,
    YeastprocessRoutingModule,
    SharedModule
  ]
})
export class YeastprocessModule { }
