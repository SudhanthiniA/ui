import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {Hbrfl7aAddRoutingModule} from './hbrfl7a-add-routing.module';
import {Hbrfl7aAddComponent}  from './hbrfl7a-add.component';
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [Hbrfl7aAddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Hbrfl7aAddRoutingModule
  ]
})
export class Hbrfl7aAddModule { }
