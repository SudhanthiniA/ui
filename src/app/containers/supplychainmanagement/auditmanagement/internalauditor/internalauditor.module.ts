import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AdvancedutyregRoutingModule } from './internalauditor-routing.module';
import { InternalauditorComponent } from './internalauditor.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [InternalauditorComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    AdvancedutyregRoutingModule,
    SharedModule
  ]
})
export class AdvancedutyregModule { }
