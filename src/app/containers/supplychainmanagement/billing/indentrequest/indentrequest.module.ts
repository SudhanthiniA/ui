import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {IndentrequestRoutingModule} from './indentrequest-routing.module';
import { IndentrequestComponent } from './indentrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [IndentrequestComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentrequestRoutingModule
  ]
})
export class IndentrequestModule { }
