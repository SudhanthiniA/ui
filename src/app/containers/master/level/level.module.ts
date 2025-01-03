import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LevelRoutingModule } from './level-routing.module';
import { LevelComponent } from './level.component';
import { AddlevelComponent } from './addlevel/addlevel.component';
import { ViewlevelComponent } from './viewlevel/viewlevel.component';


@NgModule({
  declarations: [
    LevelComponent,
    AddlevelComponent,
    ViewlevelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LevelRoutingModule
  ]
})
export class LevelModule { }
