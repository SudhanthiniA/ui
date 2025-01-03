import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IstRoutingModule } from './ist-routing.module';
import { IstComponent } from './ist.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [IstComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IstRoutingModule
  ]
})
export class IstModule { }
