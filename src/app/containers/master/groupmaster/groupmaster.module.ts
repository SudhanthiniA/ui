import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { GroupmasterRoutingModule } from './groupmaster-routing.module';
import { GroupmasterComponent } from './groupmaster.component';
import { AddgroupmasterComponent } from './addgroupmaster/addgroupmaster.component';
import { ViewgroupmasterComponent } from './viewgroupmaster/viewgroupmaster.component';

@NgModule({
  declarations: [GroupmasterComponent, AddgroupmasterComponent, ViewgroupmasterComponent],
  imports: [
    CommonModule,
    GroupmasterRoutingModule,
    SharedModule
  ]
})
export class GroupmasterModule { }
