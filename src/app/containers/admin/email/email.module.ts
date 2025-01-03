import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';


import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [EmailComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    EmailRoutingModule,
    SharedModule
  ]
})
export class EmailModule { }
