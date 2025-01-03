import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AlltestRoutingModule } from './alltest-routing.module';
// import { Test1Component } from './test1.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

 
@NgModule({
  declarations: [AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlltestRoutingModule
  ]
})
export class AlltestModule { }
