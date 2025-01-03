import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { LabelrequestRoutingModule } from './labelrequest-routing.module';
import { LabelrequestComponent } from './labelrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [LabelrequestComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    LabelrequestRoutingModule,
    SharedModule
  ]
})
export class LabelrequestModule { }
