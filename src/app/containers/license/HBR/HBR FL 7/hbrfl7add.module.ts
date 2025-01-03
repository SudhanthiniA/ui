import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {Hbrfl7addRoutingModule} from './hbrfl7add-routing.module';
import {Hbrfl7addComponent}  from './hbrfl7add.component';
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [Hbrfl7addComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Hbrfl7addRoutingModule
  ]
})
export class Hbrfl7addModule { }
