import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WastagetypeRoutingModule } from './wastagetype-routing.module';
import { WastagetypeComponent } from './wastagetype.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [WastagetypeComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    WastagetypeRoutingModule
  ]
})
export class WastagetypeModule { }
