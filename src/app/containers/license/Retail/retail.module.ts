import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';

import { RetailRoutingModule } from './retail-routing.module';


@NgModule({
  imports: [
    SharedModule,
    RetailRoutingModule
  ],
  providers: [],
  declarations: []
})
export class RetailModule { }
