import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MonocartondispatchRoutingModule } from './monocartondispatch-routing.module';
import { MonocartondispatchComponent } from './monocartondispatch.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    MonocartondispatchComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MonocartondispatchRoutingModule
  ]
})
export class MonocartondispatchModule { }
