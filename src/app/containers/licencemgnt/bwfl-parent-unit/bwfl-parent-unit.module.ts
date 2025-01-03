import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseSharedModule } from '@appLicMgnt/license-shared.module';

import { BwflParentUnitRoutingModule } from './bwfl-parent-unit-routing.module';
import { BwflParentFormComponent } from './bwfl-parent-form/bwfl-parent-form.component';
import { BwflParentViewComponent } from './bwfl-parent-view/bwfl-parent-view.component';

@NgModule({
  declarations: [
    BwflParentFormComponent,
    BwflParentViewComponent,
  ],
  imports: [
    CommonModule,
    BwflParentUnitRoutingModule,
    LicenseSharedModule
  ]
})
export class BwflParentUnitModule { }
