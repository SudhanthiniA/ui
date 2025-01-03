import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';
import { MonthwiserevenueRoutingModule } from './monthwiserevenue-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { JdstataddComponent } from './jdstatadd/jdstatadd.component';
import { JdstatlistComponent } from './jdstatlist/jdstatlist.component';
import { TaskforcelistComponent } from './taskforcelist/taskforcelist.component';
import { TaskforceaddComponent } from './taskforceadd/taskforceadd.component';

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    JdstataddComponent,
    JdstatlistComponent,
    TaskforcelistComponent,
    TaskforceaddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MonthwiserevenueRoutingModule
  ]
})
export class MonthwiserevenueModule { }
