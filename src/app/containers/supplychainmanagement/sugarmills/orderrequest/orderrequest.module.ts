import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { OrderrequestRoutingModule } from './orderrequest-routing.module';
import { OrderrequestComponent } from './orderrequest.component';
import { VieworderrequestComponent } from './vieworderrequest/vieworderrequest.component';
import { EditorderrequestComponent } from './editorderrequest/editorderrequest.component';

@NgModule({
  declarations: [
    OrderrequestComponent,
    VieworderrequestComponent,
    EditorderrequestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderrequestRoutingModule
  ]
})
export class OrderrequestModule { }
