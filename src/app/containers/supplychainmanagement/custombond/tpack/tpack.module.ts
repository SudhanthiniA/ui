import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { TpackRoutingModule } from './tpack-routing.module';
import { TpackComponent } from './tpack.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [TpackComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TpackRoutingModule
  ]
})
export class TpackModule { }
