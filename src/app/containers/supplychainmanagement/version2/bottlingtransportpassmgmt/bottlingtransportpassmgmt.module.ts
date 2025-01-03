import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottlingtransportpassmgmtRoutingModule } from './bottlingtransportpassmgmt-routing.module';
import { BottlingtransportpassmgmtComponent } from './bottlingtransportpassmgmt.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [BottlingtransportpassmgmtComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingtransportpassmgmtRoutingModule
  ]
})
export class BottlingtransportpassmgmtModule { }
