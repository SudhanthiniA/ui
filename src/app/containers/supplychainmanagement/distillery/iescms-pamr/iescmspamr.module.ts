import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IescmspamrComponent } from './iescmspamr.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {IescmspamrRoutingModule} from './iescmspamr-routing.module';



@NgModule({
  declarations: [IescmspamrComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IescmspamrRoutingModule
  ]
})
export class IescmspamrModule { }
