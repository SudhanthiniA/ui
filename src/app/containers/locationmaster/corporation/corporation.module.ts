import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { CorporationRoutingModule } from './corporation-routing.module';
import { CorporationComponent } from './corporation.component';
import { ViewCorporationComponent } from './view-corporation/view-corporation.component';
import { AddCorporationComponent } from './add-corporation/add-corporation.component';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    CorporationComponent,
    ViewCorporationComponent,
    AddCorporationComponent
  ],
  imports: [
    CommonModule,
    CorporationRoutingModule,
    SharedModule,
    DataTablesModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class CorporationModule { }
