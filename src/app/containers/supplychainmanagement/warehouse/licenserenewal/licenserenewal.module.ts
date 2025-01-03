import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { LicenserenewalComponent } from './licenserenewal.component';
import { LicenserenewalRoutingModule } from './licenserenewal-routing.module';
// import {  LicenserenewalRoutingModule } from './Licenserenewal-routing.module';

@NgModule({
  declarations: [AddComponent, ViewComponent,LicenserenewalComponent],
  imports: [
    CommonModule,
    SharedModule,
    LicenserenewalRoutingModule
  ]
})
export class LicenserenewalModule { }
