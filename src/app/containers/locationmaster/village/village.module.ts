import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { VillageRoutingModule } from './village-routing.module';
import { VillageComponent } from './village.component';
import { AddVillageComponent } from './add-village/add-village.component';
import { ViewVillageComponent } from './view-village/view-village.component';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    VillageComponent,
    AddVillageComponent,
    ViewVillageComponent
  ],
  imports: [
    CommonModule,
    VillageRoutingModule,
    SharedModule,
    DataTablesModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class VillageModule { }
