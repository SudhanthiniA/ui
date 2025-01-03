
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryComponent } from './subcategory.component';
import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { AddeditsubcategoryComponent } from './addeditsubcategory/addeditsubcategory.component';
import { ViewsubcategoryComponent } from './viewsubcategory/viewsubcategory.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    SubcategoryComponent, 
    AddeditsubcategoryComponent, 
    ViewsubcategoryComponent
  ],
  imports: [
    CommonModule,
    SubcategoryRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule
  ]
})
export class SubcategoryModule { }
