import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PolicestationRoutingModule } from './policestation-routing.module';
import { PolicestationComponent } from './policestation.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [PolicestationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PolicestationRoutingModule
  ]
})
export class PolicestationModule { }
