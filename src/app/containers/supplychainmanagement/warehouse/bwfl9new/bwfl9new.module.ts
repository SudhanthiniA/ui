import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Bwfl9newRoutingModule } from './bwfl9new-routing.module';
import { Bwfl9newComponent } from './bwfl9new.component';
import { Viewbwfl9newComponent } from './viewbwfl9new/viewbwfl9new.component';

@NgModule({
  declarations: [Bwfl9newComponent, Viewbwfl9newComponent],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl9newRoutingModule
  ]
})
export class Bwfl9newModule { }
