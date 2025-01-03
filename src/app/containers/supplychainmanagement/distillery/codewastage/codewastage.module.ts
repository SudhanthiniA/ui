import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { CodewastageComponent } from './codewastage.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import {CodewastageRoutingModule} from './codewastage-routing.module';

@NgModule({
  declarations: [CodewastageComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    CodewastageRoutingModule
  ]
})
export class CodewastageModule { }
