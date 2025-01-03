import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { UnmapandremappingRoutingModule } from './unmapandremapping-routing.module';
import { UnmapandremappingComponent } from './unmapandremapping.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [UnmapandremappingComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    UnmapandremappingRoutingModule
  ]
})
export class UnmapandremappingModule { }
