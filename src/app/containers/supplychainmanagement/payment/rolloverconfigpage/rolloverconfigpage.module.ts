import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {RolloverconfigpageRoutingModule} from './rolloverconfigpage-routing.module';
import { RolloverconfigpageComponent } from './rolloverconfigpage.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [RolloverconfigpageComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RolloverconfigpageRoutingModule
  ]
})
export class RolloverconfigpageModule { }
