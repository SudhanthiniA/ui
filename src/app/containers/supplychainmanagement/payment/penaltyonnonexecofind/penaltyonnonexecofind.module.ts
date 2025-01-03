import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { PenaltyonnonexecofindRoutingModule } from './penaltyonnonexecofind-routing.module';
import { PenaltyonnonexecofindComponent } from './penaltyonnonexecofind.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [PenaltyonnonexecofindComponent, AddComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PenaltyonnonexecofindRoutingModule
  ]
})
export class PenaltyonnonexecofindModule { }
