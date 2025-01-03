import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddremovalofspiritfordenaturingComponent } from './addremovalofspiritfordenaturing/addremovalofspiritfordenaturing.component';
import { ViewremovalofspiritfordenaturingComponent } from './viewremovalofspiritfordenaturing/viewremovalofspiritfordenaturing.component';
import { RemovalofspiritfordenaturingComponent } from './removalofspiritfordenaturing.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { RemovalofspiritfordenaturingRoutingModule } from './removalofspiritfordenaturing-routing.module';


@NgModule({
  declarations: [AddremovalofspiritfordenaturingComponent, ViewremovalofspiritfordenaturingComponent, RemovalofspiritfordenaturingComponent],
  imports: [
    CommonModule,
    RemovalofspiritfordenaturingRoutingModule,
    SharedModule
  ]
})
export class RemovalofspiritfordenaturingModule { }
