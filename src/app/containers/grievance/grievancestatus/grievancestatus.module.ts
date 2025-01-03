import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { GrievancestatusRoutingModule } from './grievancestatus-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { TypeofusersComponent } from './typeofusers/typeofusers.component';

@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent, TypeofusersComponent],
  imports: [
    CommonModule,
    GrievancestatusRoutingModule,
    SharedModule
  ]
})
export class GrievancestatusModule { }
