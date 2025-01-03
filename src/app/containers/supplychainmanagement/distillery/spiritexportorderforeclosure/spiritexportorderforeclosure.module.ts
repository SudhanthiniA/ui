import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { SpiritexportorderforeclosureRoutingModule } from './spiritexportorderforeclosure-routing.module';
import { SpiritexportorderforeclosureComponent } from './spiritexportorderforeclosure.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [SpiritexportorderforeclosureComponent,
    AddComponent,
    ViewComponent,],
  imports: [
    CommonModule,
    SharedModule,
    SpiritexportorderforeclosureRoutingModule
  ]
})
export class SpiritexportorderforeclosureModule { }
