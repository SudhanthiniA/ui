import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuetypeRoutingModule } from './issuetype-routing.module';
import { IssuetypeComponent } from './issuetype.component';
import { AddissuetypeComponent } from './addissuetype/addissuetype.component';
import { ViewissuetypeComponent } from './viewissuetype/viewissuetype.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [IssuetypeComponent, AddissuetypeComponent, ViewissuetypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    IssuetypeRoutingModule
  ]
})
export class IssuetypeModule { }
