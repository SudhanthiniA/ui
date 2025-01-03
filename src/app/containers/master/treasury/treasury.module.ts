import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreasuryRoutingModule } from './treasury-routing.module';
import { AddTreasuryComponent } from './addtreasury/addtreasury.component';
import { ViewTreasuryComponent } from './viewtreasury/viewtreasury.component';
import { TreasuryComponent } from './treasury.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AddTreasuryComponent,
    ViewTreasuryComponent,
    TreasuryComponent
  ],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    TreasuryRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class TreasuryModule { }
