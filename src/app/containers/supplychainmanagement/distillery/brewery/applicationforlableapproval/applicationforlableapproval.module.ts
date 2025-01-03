import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { ApplicationforlableapprovalRoutingModule} from './applicationforlableapproval-routing.module';
import { ApplicationforlableapprovalComponent } from './applicationforlableapproval.component';
import { AddapplicationforlableapprovalComponent } from './addapplicationforlableapproval/addapplicationforlableapproval.component';
import { ViewapplicationforlableapprovalComponent } from './viewapplicationforlableapproval/viewapplicationforlableapproval.component';


@NgModule({
  declarations: [ApplicationforlableapprovalComponent, AddapplicationforlableapprovalComponent, ViewapplicationforlableapprovalComponent],
  imports: [
    CommonModule,
    ApplicationforlableapprovalRoutingModule,
    SharedModule
  ]
})
export class ApplicationforlableapprovalModule { }
