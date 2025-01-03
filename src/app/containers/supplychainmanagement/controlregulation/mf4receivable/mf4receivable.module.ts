import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Mf4receivableRoutingModule } from './mf4receivable-routing.module';
import { Mf4receivableComponent } from './mf4receivable.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { AckeditComponent } from './ackedit/ackedit.component';

@NgModule({
  declarations: [Mf4receivableComponent, AddComponent, ViewComponent, AckeditComponent],
  imports: [
    CommonModule,
    SharedModule,
    Mf4receivableRoutingModule
  ]
})
export class Mf4receivableModule { }
