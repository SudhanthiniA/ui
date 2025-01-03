import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {SalereportRoutingModule} from './salereport-routing.module';
import { SalereportComponent } from './salereport.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [SalereportComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SalereportRoutingModule,
    SharedModule
  ]
})
export class SalereportModule { }
