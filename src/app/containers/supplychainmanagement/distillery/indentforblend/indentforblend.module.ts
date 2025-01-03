import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { IndentforblendRoutingModule } from './indentforblend-routing.module';
import { IndentforblendComponent } from './indentforblend.component';
import { AddindentforblendComponent } from './addindentforblend/addindentforblend.component';
import { ViewindentforblendComponent } from './viewindentforblend/viewindentforblend.component';
import { ApprovalindentComponent } from './approvalindent/approvalindent.component';



@NgModule({
  declarations: [IndentforblendComponent, AddindentforblendComponent, ViewindentforblendComponent, ApprovalindentComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentforblendRoutingModule
  ]
})
export class IndentforblendModule { }
