import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { IssueofrawComponent } from './issueofraw.component';
import { AddissueofrawComponent } from './addissueofraw/addissueofraw.component';
import { IssueofrawRoutingModule } from './issueofraw-routing.module';
import { ViewissueofrawComponent } from './viewissueofraw/viewissueofraw.component';

@NgModule({
  declarations: [IssueofrawComponent, AddissueofrawComponent, ViewissueofrawComponent ],
  imports: [
    CommonModule,
    SharedModule,
    IssueofrawRoutingModule
  ]
})
export class IssueofrawModule { }
