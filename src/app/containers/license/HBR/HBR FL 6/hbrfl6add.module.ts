import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {Hbrfl6addRoutingModule} from './hbrfl6add-routing.module';
import {Hbrfl6addComponent}  from './hbrfl6add.component';
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [Hbrfl6addComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Hbrfl6addRoutingModule
  ]
})
export class Hbrfl6addModule { }
