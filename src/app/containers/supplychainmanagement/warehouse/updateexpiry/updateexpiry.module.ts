import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UpdateexpiryRoutingModule } from './updateexpiry-routing.module';
import { UpdateexpiryComponent } from './updateexpiry.component';


@NgModule({
  declarations: [UpdateexpiryComponent],
  imports: [
    CommonModule,
    SharedModule,
    UpdateexpiryRoutingModule
  ]
})
export class UpdateexpiryModule { }
