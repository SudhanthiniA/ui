import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';

import { UsedforrawmaterialtanktypeRoutingModule } from './usedforrawmaterialtanktype-routing.module';
import { UsedforrawmaterialtanktypeComponent } from './usedforrawmaterialtanktype.component';
import { AddusedforrawmaterialtanktypeComponent } from './addusedforrawmaterialtanktype/addusedforrawmaterialtanktype.component';
import { ViewusedforrawmaterialtanktypeComponent } from './viewusedforrawmaterialtanktype/viewusedforrawmaterialtanktype.component';



@NgModule({
  declarations: [UsedforrawmaterialtanktypeComponent, AddusedforrawmaterialtanktypeComponent, ViewusedforrawmaterialtanktypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    UsedforrawmaterialtanktypeRoutingModule
  ]
})
export class UsedforrawmaterialtanktypeModule { }
