import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { MunicipalcategoryRoutingModule } from './municipalcategory-routing.module';
import { MunicipalcategoryComponent } from './municipalcategory.component';
import { ViewmunicipalcategoryComponent } from './viewmunicipalcategory/viewmunicipalcategory.component';



@NgModule({
  declarations: [MunicipalcategoryComponent, ViewmunicipalcategoryComponent,],
  imports: [
    CommonModule,
    SharedModule,
    MunicipalcategoryRoutingModule
  ]
})
export class MunicipalcategoryModule { }
