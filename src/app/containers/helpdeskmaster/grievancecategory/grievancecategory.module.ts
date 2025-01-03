import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { GrievancecategoryRoutingModule } from './grievancecategory-routing.module';
import { GrievancecategoryComponent } from './grievancecategory.component';
import { AddgrievancecategoryComponent } from './addgrievancecategory/addgrievancecategory.component';
import { ViewgrievancecategoryComponent } from './viewgrievancecategory/viewgrievancecategory.component';


@NgModule({
  declarations: [GrievancecategoryComponent, AddgrievancecategoryComponent, ViewgrievancecategoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    GrievancecategoryRoutingModule
  ]
})
export class GrievancecategoryModule { }
