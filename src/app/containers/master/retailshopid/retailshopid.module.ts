import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RetailshopidRoutingModule } from './retailshopid-routing.module';
import { RetailshopidComponent } from './retailshopid.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [RetailshopidComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RetailshopidRoutingModule
  ]
})
export class RetailshopidModule { }
