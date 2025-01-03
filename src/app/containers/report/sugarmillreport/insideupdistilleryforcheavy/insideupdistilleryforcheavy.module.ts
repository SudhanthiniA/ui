import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { InsideupdistilleryforcheavyRoutingModule } from './insideupdistilleryforcheavy-routing.module';
import { InsideupdistilleryforcheavyComponent } from './insideupdistilleryforcheavy.component';

@NgModule({
  imports: [
    CommonModule,
    InsideupdistilleryforcheavyRoutingModule,
    SharedModule
  ],
  declarations: [InsideupdistilleryforcheavyComponent]
})
export class InsideupdistilleryforcheavyModule { }
