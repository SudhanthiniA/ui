import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { OutupdistlabelregRoutingModule } from './outupdistlabelreg-routing.module';
import { OutupdistlabelregComponent } from './outupdistlabelreg.component';
import { AddoutupdistlabelregComponent } from './addoutupdistlabelreg/addoutupdistlabelreg.component';
import { ViewoutupdistlabelregComponent } from './viewoutupdistlabelreg/viewoutupdistlabelreg.component';

@NgModule({
  declarations: [OutupdistlabelregComponent, AddoutupdistlabelregComponent, ViewoutupdistlabelregComponent],
  imports: [
    CommonModule,
    SharedModule,
    OutupdistlabelregRoutingModule
  ]
})
export class OutupdistlabelregModule { }
