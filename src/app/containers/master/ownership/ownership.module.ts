import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { OwnershipRoutingModule } from './ownership-routing.module';
import { OwnershipComponent } from './ownership.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [OwnershipComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    OwnershipRoutingModule
  ]
})
export class OwnershipModule { }
