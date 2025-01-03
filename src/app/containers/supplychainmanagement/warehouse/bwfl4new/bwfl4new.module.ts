import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Bwfl4newRoutingModule } from './bwfl4new-routing.module';
import { Bwfl4newComponent } from './bwfl4new.component';
import { Viewbwfl4newComponent } from './viewbwfl4new/viewbwfl4new.component';

@NgModule({
  declarations: [Bwfl4newComponent, Viewbwfl4newComponent],
  imports: [
    CommonModule,
    SharedModule,
    Bwfl4newRoutingModule
  ]
})
export class Bwfl4newModule { }
