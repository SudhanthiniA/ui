import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MunicipalareacategoryRoutingModule } from './municipalareacategory-routing.module';
import { MunicipalareacategoryComponent } from './municipalareacategory.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [MunicipalareacategoryComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    MunicipalareacategoryRoutingModule,
    SharedModule
  ]
})
export class MunicipalareacategoryModule { }
