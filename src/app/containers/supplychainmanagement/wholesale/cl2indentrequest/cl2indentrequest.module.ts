import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {Cl2indentrequestRoutingModule} from './cl2indentrequest-routing.module';
import { Cl2indentrequestComponent } from './cl2indentrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [Cl2indentrequestComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Cl2indentrequestRoutingModule
  ]
})
export class  Cl2indentrequestModule { }
