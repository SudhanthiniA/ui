import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { UnmappingandremappingRoutingModule } from './unmappingandremapping-routing.module';
import {UnmappingandremappingComponent} from './unmappingandremapping.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [UnmappingandremappingComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    UnmappingandremappingRoutingModule,
    SharedModule
  ]
})
export class UnmappingandremappingModule { }
