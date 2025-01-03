import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ExecutiveviewprofileRoutingModule } from './executiveviewprofile-routing.module';
import { ExecutiveviewprofileComponent } from './executiveviewprofile.component';

@NgModule({
  declarations: [ExecutiveviewprofileComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExecutiveviewprofileRoutingModule
  ]
})
export class ExecutiveviewprofileModule { }
