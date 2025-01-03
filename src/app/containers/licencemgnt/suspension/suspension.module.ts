import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SuspensionRoutingModule } from './suspension-routing.module';

import { SuspensionComponent } from './suspension/suspension.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ViewComponent } from './suspension/view/view.component';
import { CancellationComponent } from './cancellation/cancellation.component';



@NgModule({
  declarations: [SuspensionComponent, ApplicantComponent, ViewComponent, CancellationComponent],
  imports: [
    CommonModule,
    SharedModule,
    SuspensionRoutingModule
  ]
})
export class SuspensionModule { }
