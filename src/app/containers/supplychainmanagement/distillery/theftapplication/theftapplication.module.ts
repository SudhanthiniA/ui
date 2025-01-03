import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {TheftapplicationRoutingModule} from './theftapplication-routing.module'
import { TheftapplicationComponent } from './theftapplication.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [TheftapplicationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    TheftapplicationRoutingModule,
    SharedModule
  ]
})
export class TheftapplicationModule { }
