import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicencecategoryRoutingModule } from './licencecategory-routing.module';
import { LicencecategoryComponent } from './licencecategory.component';
import { AddeditlicencecategoryComponent } from './addeditlicencecategory/addeditlicencecategory.component';
import { ViewlicencecategoryComponent } from './viewlicencecategory/viewlicencecategory.component';
import { SharedModule } from '@appThemeShared/shared.module';


@NgModule({
  declarations: [
    LicencecategoryComponent, 
    AddeditlicencecategoryComponent, 
    ViewlicencecategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LicencecategoryRoutingModule
  ]
})
export class LicencecategoryModule { }
