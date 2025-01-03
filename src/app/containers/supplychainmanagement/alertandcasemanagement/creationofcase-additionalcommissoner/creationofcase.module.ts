import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UnscheduledinspectionRoutingModule } from './creationofcase-routing.module';
import { CreationofcaseComponent } from './creationofcase.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { CaseinitiatingofficerloginComponent } from './caseinitiatingofficerlogin/caseinitiatingofficerlogin.component';
import { ViewcaseinitiatingofficerloginComponent } from './viewcaseinitiatingofficerlogin/viewcaseinitiatingofficerlogin.component';

@NgModule({
  declarations: [CreationofcaseComponent, AddComponent, ViewComponent, CaseinitiatingofficerloginComponent, ViewcaseinitiatingofficerloginComponent],
  imports: [
    CommonModule,
    SharedModule,
    UnscheduledinspectionRoutingModule
  ]
})
export class UnscheduledinspectionModule { }