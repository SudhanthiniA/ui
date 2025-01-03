import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ActionsleviedRoutingModule } from './actionslevied-routing.module';
import { ActionsleviedComponent } from './actionslevied.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [ActionsleviedComponent,AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ActionsleviedRoutingModule
  ]
})
export class ActionsleviedModule { }
