import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { QuotatransferrequestRoutingModule } from './quotatransferrequest-routing.module';
import { QuotatransferrequestComponent } from './quotatransferrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DeolistComponent } from './deolist/deolist.component';
import { ApprovalComponent } from './approval/approval.component';


@NgModule({
  declarations: [QuotatransferrequestComponent, AddComponent, ViewComponent, DeolistComponent, ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    QuotatransferrequestRoutingModule
  ]
})
export class QuotatransferrequestModule { }
