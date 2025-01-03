import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LostandmissingRoutingModule } from './lostandmissing-routing.module';
import { LostandmissingComponent } from './lostandmissing.component';
import { ViewlostandmissingComponent } from './viewlostandmissing/viewlostandmissing.component';

@NgModule({
  declarations: [LostandmissingComponent, ViewlostandmissingComponent],
  imports: [
    CommonModule,
    SharedModule,
    LostandmissingRoutingModule
  ]
})
export class LostandmissingModule { }
