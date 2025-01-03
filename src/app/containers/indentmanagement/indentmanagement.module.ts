import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';

import { LiquorIndentmanagementRoutingModule } from './indentmanagement-routing.module';

@NgModule({
  declarations: [],
  imports: [
    LiquorIndentmanagementRoutingModule,
    SharedModule
  ]
})
export class LiquorIndentmanagementModule { }
