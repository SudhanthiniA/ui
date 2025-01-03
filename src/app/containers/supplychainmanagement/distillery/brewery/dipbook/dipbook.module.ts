import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { SharedModule } from '@appThemeShared/shared.module';

import { DipbookRoutingModule } from './dipbook-routing.module';
import { DipbookComponent } from './dipbook.component';

@NgModule({
  declarations: [AddComponent, ViewComponent, DipbookComponent],
  imports: [
    CommonModule,
    DipbookRoutingModule,
    SharedModule
  ]
})
export class DipbookModule { }
