import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ImportoforderRoutingModule } from './importoforder-routing.module';
import { ImportoforderComponent } from './importoforder.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ImportoforderComponent,
    AddComponent,
    ViewComponent,],
  imports: [
    CommonModule,
    SharedModule,
    ImportoforderRoutingModule
  ]
})
export class ImportoforderModule { }
