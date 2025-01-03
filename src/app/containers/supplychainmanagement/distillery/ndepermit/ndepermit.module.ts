import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NdepermitRoutingModule } from './ndepermit-routing.module';
import { NdepermitComponent } from './ndepermit.component';
import { AddndepermitComponent } from './addndepermit/addndepermit.component';
import { ViewndepermitComponent } from './viewndepermit/viewndepermit.component';
import { ApprovalndepermitComponent } from './approvalndepermit/approvalndepermit.component';


@NgModule({
  declarations: [NdepermitComponent,AddndepermitComponent,ViewndepermitComponent,ApprovalndepermitComponent],
  imports: [
    CommonModule,
    SharedModule,
    NdepermitRoutingModule
  ]
}) 
export class NdepermitModule { }
