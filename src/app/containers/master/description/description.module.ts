import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionRoutingModule } from './description-routing.module';
import { AddDescriptionComponent } from './adddescription/adddescription.component';
import { ViewDescriptionComponent } from './viewdescription/viewdescription.component';
import { DescriptionComponent } from './description.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AddDescriptionComponent,
    ViewDescriptionComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule,
    DataTablesModule
  ]
})
export class DescriptionModule { }
