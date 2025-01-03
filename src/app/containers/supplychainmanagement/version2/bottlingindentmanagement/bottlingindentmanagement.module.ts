import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottlingindentmanagementRoutingModule } from './bottlingindentmanagement-routing.module';
import { BottlingindentmanagementComponent } from './bottlingindentmanagement.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [BottlingindentmanagementComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingindentmanagementRoutingModule
  ]
})
export class BottlingindentmanagementModule { }
