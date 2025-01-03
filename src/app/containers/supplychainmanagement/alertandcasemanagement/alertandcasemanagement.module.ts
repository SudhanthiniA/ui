import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { AlertandcasemanagementRoutingModule } from './alertandcasemanagement-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AlertandcasemanagementRoutingModule,
  ],
  providers: [DatePipe],
  declarations: []
})
export class AlertandcasemanagementModule { }
