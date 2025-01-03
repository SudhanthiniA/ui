import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ApplicationforredistillationofbottledstockRoutingModule } from './applicationforredistillationofbottledstock-routing.module';
import { ApplicationforredistillationofbottledstockComponent } from './applicationforredistillationofbottledstock.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [ApplicationforredistillationofbottledstockComponent, ViewComponent, AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationforredistillationofbottledstockRoutingModule
  ]
})
export class ApplicationforredistillationofbottledstockModule { }
