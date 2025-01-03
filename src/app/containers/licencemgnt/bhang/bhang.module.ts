import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BhangComponent } from './bhang.component';
import { BhangRoutingModule } from './bhang-routing.module';
import { BhangLicenseFormComponent } from './bhang-license-form/bhang-license-form.component';

@NgModule({
  declarations: [ BhangComponent, BhangLicenseFormComponent,  ],
  imports: [
    CommonModule,
    BhangRoutingModule,
    SharedModule
  ]
})
export class BhangModule { }
