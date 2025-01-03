import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { TaulkRoutingModule } from './taulk-routing.module';
import { TaulkComponent } from './taulk.component';
import { AddTaulkComponent } from './add-taulk/add-taulk.component';
import { ViewTaulkComponent } from './view-taulk/view-taulk.component';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    TaulkComponent,
    AddTaulkComponent,
    ViewTaulkComponent
  ],
  imports: [
    CommonModule,
    TaulkRoutingModule,
    SharedModule,
    DataTablesModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class TaulkModule { }
