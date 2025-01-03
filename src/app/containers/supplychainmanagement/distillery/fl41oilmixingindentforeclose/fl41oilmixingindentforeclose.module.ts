import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';
import {Fl41oilmixingindentforecloseRoutingModule} from './fl41oilmixingindentforeclose-routing.module';
 


@NgModule({
  declarations: [ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    Fl41oilmixingindentforecloseRoutingModule
  ]
})
export class Fl41oilmixingindentforecloseModule { }
