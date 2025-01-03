import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { EntityviewsmaprequestRoutingModule } from './entityviewsmaprequest-routing.module';
import { EntityviewsmaprequestComponent } from './entityviewsmaprequest.component';
import { MwhprofileviewComponent } from './mwhprofileview/mwhprofileview.component';

@NgModule({
  declarations: [EntityviewsmaprequestComponent, MwhprofileviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    EntityviewsmaprequestRoutingModule
  ]
})
export class EntityviewsmaprequestModule { }
