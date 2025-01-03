import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';
import { Importofspritbyfl39RoutingModule } from './importofspritbyfl39-routing.module';



@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent, ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    Importofspritbyfl39RoutingModule
  ]
})
export class Importofspritbyfl39Module { }
