import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ApplicantrequestforealRoutingModule } from './applicantrequestforeal-routing.module';
import { ApplicantrequestforealComponent } from './applicantrequestforeal.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ApplicantrequestforealComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApplicantrequestforealRoutingModule
  ]
})
export class ApplicantrequestforealModule { }
