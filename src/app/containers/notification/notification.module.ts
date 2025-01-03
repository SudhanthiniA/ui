import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    SharedModule
  ]
})
export class NotificationModule { }
