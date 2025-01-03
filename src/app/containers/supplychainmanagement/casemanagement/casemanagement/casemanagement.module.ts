import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { CasemanagementRoutingModule } from './casemanagement-routing.module';
import { CasemanagementComponent } from './casemanagement.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [CasemanagementComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    CasemanagementRoutingModule
  ]
})
export class CasemanagementModule { }
