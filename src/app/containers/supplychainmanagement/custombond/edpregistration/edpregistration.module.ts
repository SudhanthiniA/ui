import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { EdpregistrationRoutingModule } from './edpregistration-routing.module';
import { EdpregistrationComponent } from './edpregistration.component';
import { AddedpregistrationComponent } from './addedpregistration/addedpregistration.component';
import { ApprovalComponent } from './approval/approval.component';
import { ListbrandhistoryComponent } from './listbrandhistory/listbrandhistory.component';
import { ViewComponent } from './view/view.component';
import { ViewapprovalComponent } from './viewapproval/viewapproval.component';
import { ViewbrandhistoryComponent } from './viewbrandhistory/viewbrandhistory.component';


@NgModule({
  declarations: [EdpregistrationComponent, AddedpregistrationComponent, ApprovalComponent, ListbrandhistoryComponent, ViewComponent, ViewapprovalComponent, ViewbrandhistoryComponent],
  imports: [
    CommonModule,
    EdpregistrationRoutingModule,
    SharedModule
  ]
})
export class EdpregistrationModule { }
