import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {ApplicationforexportofmolassesRoutingModule} from './applicationforexportofmolasses-routing.module';

import { ApplicationforexportofmolassesComponent } from './applicationforexportofmolasses.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ApplicationforexportofmolassesComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    ApplicationforexportofmolassesRoutingModule,
    SharedModule
  ]
})
export class ApplicationforexportofmolassesModule { }
