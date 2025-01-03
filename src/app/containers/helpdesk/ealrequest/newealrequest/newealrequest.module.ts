import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NewealrequestRoutingModule } from './newealrequest-routing.module';
import { NewealrequestComponent } from './newealrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [NewealrequestComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    NewealrequestRoutingModule
  ]
})
export class NewealrequestModule { }
