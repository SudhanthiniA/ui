import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { CrushingComponent } from './crushing.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {CrushingRoutingModule} from './crushing-routing.module';


@NgModule({
  declarations: [CrushingComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    CrushingRoutingModule 
  ]
})
export class CrushingModule { }
