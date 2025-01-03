import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {SugarmilltenderRoutingModule} from './sugarmilltender-routing.module'


@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    SugarmilltenderRoutingModule
  ]
})
export class SugarmilltenderModule { }
