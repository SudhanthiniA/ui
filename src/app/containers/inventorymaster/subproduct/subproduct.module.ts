import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubproductRoutingModule } from './subproduct-routing.module';
import { AddeditsubproductComponent } from './addeditsubproduct/addeditsubproduct.component';
import { ViewsubproductComponent } from './viewsubproduct/viewsubproduct.component';
import { SubproductComponent } from './subproduct.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AddeditsubproductComponent,
    ViewsubproductComponent,
    SubproductComponent
  ],
  imports: [
    CommonModule,
    SubproductRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule
  ]
})
export class SubproductModule { }
