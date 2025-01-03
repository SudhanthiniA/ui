import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BasewinetransfromprodstoragetankComponent } from './basewinetransfromprodstoragetank.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {BasewinetransfromprodstoragetankRoutingModule} from './basewinetransfromprodstoragetank-routing.module';


@NgModule({
  declarations: [BasewinetransfromprodstoragetankComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BasewinetransfromprodstoragetankRoutingModule
  ]
})
export class BasewinetransfromprodstoragetankModule { }
