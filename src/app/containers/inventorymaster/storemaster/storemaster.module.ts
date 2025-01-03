import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoremasterRoutingModule } from './storemaster-routing.module';
import { StoremasterComponent } from './storemaster.component';
import { AddstoremasterComponent } from './addstoremaster/addstoremaster.component';
import { ViewstoremasterComponent } from './viewstoremaster/viewstoremaster.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [StoremasterComponent, AddstoremasterComponent, ViewstoremasterComponent],
  imports: [
    CommonModule,
    StoremasterRoutingModule,
    SharedModule
  ]
})
export class StoremasterModule { }
