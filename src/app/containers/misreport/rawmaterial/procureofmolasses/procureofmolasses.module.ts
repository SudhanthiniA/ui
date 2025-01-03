import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ProcureofmolassesRoutingModule } from './procureofmolasses-routing.module';
import { ProcureofmolassesComponent } from './procureofmolasses.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ProcureofmolassesComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProcureofmolassesRoutingModule
  ]
})
export class ProcureofmolassesModule { }
