import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AppcommunicationRoutingModule } from './appcommunication-routing.module';
import { AppcommunicationComponent } from './appcommunication.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [AppcommunicationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppcommunicationRoutingModule
  ]
})
export class AppcommunicationModule { }
