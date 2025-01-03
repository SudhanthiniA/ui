import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { PermitrequestComponent } from './permitrequest.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PermitrequestRoutingModule } from './permitrequest-routing.module'

@NgModule({
  declarations: [
    PermitrequestComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PermitrequestRoutingModule
  ]
})
export class PermitrequestModule { }
