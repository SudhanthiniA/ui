import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';

import { ExpirytypeRoutingModule } from './expirytype-routing.module';
import { ExpirytypeComponent } from './expirytype.component';
import { AddexpirytypeComponent } from './addexpirytype/addexpirytype.component';
import { ViewexpirytypeComponent } from './viewexpirytype/viewexpirytype.component';



@NgModule({
  declarations: [ExpirytypeComponent, AddexpirytypeComponent, ViewexpirytypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    ExpirytypeRoutingModule
  ]
})
export class ExpirytypeModule { }
