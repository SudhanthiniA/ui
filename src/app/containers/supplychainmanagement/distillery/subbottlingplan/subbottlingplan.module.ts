import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SubbottlingplanComponent } from './subbottlingplan.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import {SubbottlingplanRoutingModule} from './subbottlingplan-routing.module';

@NgModule({
  declarations: [SubbottlingplanComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SubbottlingplanRoutingModule,
    SharedModule
  ]
})
export class SubbottlingplanModule { }
