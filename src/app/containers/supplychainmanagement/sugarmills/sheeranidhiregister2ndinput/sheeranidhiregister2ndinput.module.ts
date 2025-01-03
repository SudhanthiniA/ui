import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {Sheeranidhiregister2ndinputRoutingModule} from './sheeranidhiregister2ndinput-routing.module';
import { Sheeranidhiregister2ndinputComponent } from './sheeranidhiregister2ndinput.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [Sheeranidhiregister2ndinputComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Sheeranidhiregister2ndinputRoutingModule
  ]
})
export class Sheeranidhiregister2ndinputModule { }
