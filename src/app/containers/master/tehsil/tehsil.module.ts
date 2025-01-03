import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { TehsilRoutingModule } from './tehsil-routing.module';
import { TehsilComponent } from './tehsil.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [TehsilComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TehsilRoutingModule
  ]
})
export class TehsilModule { }
