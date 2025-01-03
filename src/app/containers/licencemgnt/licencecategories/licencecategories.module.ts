import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicencecategoriesRoutingModule } from './licencecategories-routing.module';
import { LicencecategoriesComponent } from './licencecategories.component';

@NgModule({
  declarations: [LicencecategoriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    LicencecategoriesRoutingModule
  ]
})
export class LicencecategoriesModule { }
