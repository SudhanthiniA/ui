import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RepairtypemasterRoutingModule } from './repairtypemaster-routing.module';
import { RepairtypemasterComponent } from './repairtypemaster.component';
import { AddrepairtypemasterComponent } from './addrepairtypemaster/addrepairtypemaster.component';
import { ViewrepairtypemasterComponent } from './viewrepairtypemaster/viewrepairtypemaster.component';

@NgModule({
  declarations: [RepairtypemasterComponent, AddrepairtypemasterComponent, ViewrepairtypemasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RepairtypemasterRoutingModule
  ]
})
export class RepairtypemasterModule { }
