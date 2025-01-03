import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import {AccidentalrequestondeologinRoutingModule} from './accidentalrequestondeologin-routing.module';
import { SharedModule } from '@app/theme/shared/shared.module';
import { ApprovalComponent } from './approval/approval.component';



@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    AccidentalrequestondeologinRoutingModule,
    SharedModule
  ]
})
export class Accidentalpd25ondeologinModule { }
