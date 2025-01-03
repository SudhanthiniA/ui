import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MolassesRoutingModule } from './molasses-routing.module';
import { MolassesComponent } from './molasses.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddeditMolassesComponent } from './addedit-molasses/addedit-molasses.component';
import { ViewMolassesComponent } from './view-molasses/view-molasses.component';


@NgModule({
  declarations: [MolassesComponent, AddeditMolassesComponent, ViewMolassesComponent],
  imports: [
    CommonModule,
    MolassesRoutingModule,
    SharedModule
  ]
})
export class MolassesModule { }
