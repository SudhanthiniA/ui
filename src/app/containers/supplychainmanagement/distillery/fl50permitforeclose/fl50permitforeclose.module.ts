import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';
import {Fl50permitforecloseRoutingModule} from './fl50permitforeclose-routing.module';


@NgModule({
  declarations: [ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    Fl50permitforecloseRoutingModule
  ]
})
export class Fl50permitforecloseModule { }
