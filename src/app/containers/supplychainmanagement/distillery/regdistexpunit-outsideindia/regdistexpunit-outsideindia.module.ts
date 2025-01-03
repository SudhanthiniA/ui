import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { RegdistexpunitOutsideindiaRoutingModule } from './regdistexpunit-outsideindia-routing.module';
import { RegdistexpunitOutsideindiaComponent } from './regdistexpunit-outsideindia.component';
import { AddregdistexpunitOutsideindiaComponent } from './addregdistexpunit-outsideindia/addregdistexpunit-outsideindia.component';
import { ViewregdistexpunitOutsideindiaComponent } from './viewregdistexpunit-outsideindia/viewregdistexpunit-outsideindia.component';


@NgModule({
  declarations: [RegdistexpunitOutsideindiaComponent, AddregdistexpunitOutsideindiaComponent, ViewregdistexpunitOutsideindiaComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegdistexpunitOutsideindiaRoutingModule
  ]
})
export class RegdistexpunitOutsideindiaModule { }
