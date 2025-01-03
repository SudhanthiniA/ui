import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AllotmentofmolassesRoutingModule } from './allotmentofmolasses-routing.module';
import { AllotmentofmolassesComponent } from './allotmentofmolasses.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [AllotmentofmolassesComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AllotmentofmolassesRoutingModule
  ]
})
export class AllotmentofmolassesModule { }
