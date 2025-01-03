import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentapprovalRoutingModule } from './indentapproval-routing.module';
import { ViewnewindentComponent } from './viewnewindent/viewnewindent.component';
import { IndentapprovalComponent } from './indentapproval.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [IndentapprovalComponent, ViewnewindentComponent, EditComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentapprovalRoutingModule
  ]
})
export class IndentapprovalModule { }
