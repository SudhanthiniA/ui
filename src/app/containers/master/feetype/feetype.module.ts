import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeetypeRoutingModule } from './feetype-routing.module';
import { FeetypeComponent } from './feetype.component';
import { AddFeetypeComponent } from './add-feetype/add-feetype.component';
import { ViewFeetypeComponent } from './view-feetype/view-feetype.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [FeetypeComponent, AddFeetypeComponent, ViewFeetypeComponent],
  imports: [
    CommonModule,
    FeetypeRoutingModule,
    SharedModule
  ]
})
export class FeetypeModule { }
