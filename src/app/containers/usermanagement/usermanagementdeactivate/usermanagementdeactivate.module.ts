import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UsermanagementdeactivateRoutingModule } from './usermanagementdeactivate-routing.module';
import { UsermanagementdeactivateComponent } from './usermanagementdeactivate.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [UsermanagementdeactivateComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    UsermanagementdeactivateRoutingModule,
    SharedModule
  ]
})
export class UsermanagementdeactivateModule { }
