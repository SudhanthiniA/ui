import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Bwfl6newRoutingModule } from './bwfl6new-routing.module';
import { Bwfl6newComponent } from './bwfl6new.component';
import { Viewbwfl6newComponent } from './viewbwfl6new/viewbwfl6new.component';

@NgModule({
  declarations: [Bwfl6newComponent, Viewbwfl6newComponent],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl6newRoutingModule
  ]
})
export class Bwfl6newModule { }
