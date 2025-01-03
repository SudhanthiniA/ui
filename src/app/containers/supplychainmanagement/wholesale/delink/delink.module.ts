import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DelinkRoutingModule } from './delink-routing.module'
import { DelinkComponent } from './delink.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    DelinkComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DelinkRoutingModule
  ]
})
export class DelinkModule { }
