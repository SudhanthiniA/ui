import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';

import { LiquorRoutingModule } from './liquor-routing.module';
import { LiquorComponent } from './liquor.component';
import { AddeditLiquorComponent } from './addedit-liquor/addedit-liquor.component';
import { ViewLiquorComponent } from './view-liquor/view-liquor.component';

@NgModule({
  declarations: [
    LiquorComponent,
    AddeditLiquorComponent,
    ViewLiquorComponent
  ],
  imports: [
    LiquorRoutingModule,
    SharedModule
  ]
})
export class LiquorModule { }
