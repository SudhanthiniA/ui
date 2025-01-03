import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { InsideupdistilleryforbheavyRoutingModule } from './insideupdistilleryforbheavy-routing.module';
import { InsideupdistilleryforbheavyComponent } from './insideupdistilleryforbheavy.component';

@NgModule({
  imports: [
    CommonModule,
    InsideupdistilleryforbheavyRoutingModule,
    SharedModule
  ],
  declarations: [InsideupdistilleryforbheavyComponent]
})
export class InsideupdistilleryforbheavyModule { }
