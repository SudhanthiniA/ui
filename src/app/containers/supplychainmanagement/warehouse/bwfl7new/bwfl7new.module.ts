import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Bwfl7newRoutingModule } from './bwfl7new-routing.module';
import { Bwfl7newComponent } from './bwfl7new.component';
import { Viewbwfl7newComponent } from './viewbwfl7new/viewbwfl7new.component';

@NgModule({
  declarations: [Bwfl7newComponent, Viewbwfl7newComponent],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl7newRoutingModule
  ]
})
export class Bwfl7newModule { }
