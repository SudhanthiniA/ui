import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Bwfl10newRoutingModule } from './bwfl10new-routing.module';
import { Bwfl10newComponent } from './bwfl10new.component';
import { Viewbwfl10newComponent } from './viewbwfl10new/viewbwfl10new.component';

@NgModule({
  declarations: [Bwfl10newComponent, Viewbwfl10newComponent],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl10newRoutingModule
  ]
})
export class Bwfl10newModule { }
