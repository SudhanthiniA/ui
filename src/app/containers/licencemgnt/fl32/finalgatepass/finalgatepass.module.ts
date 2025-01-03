import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { FinalgatepassComponent } from './finalgatepass.component';
import { AddfinalgatepassComponent } from './addfinalgatepass/addfinalgatepass.component';
import { ViewfinalgatepassComponent } from './viewfinalgatepass/viewfinalgatepass.component';
import { FinalgatepassRoutingModule } from './finalgatepass-routing.module';

@NgModule({
  declarations: [
    FinalgatepassComponent,
    AddfinalgatepassComponent,
    ViewfinalgatepassComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FinalgatepassRoutingModule
  ]
})
export class FinalgatepassModule { }
