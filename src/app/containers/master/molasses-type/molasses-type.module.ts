import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MolassesTypeRoutingModule } from './molasses-type-routing.module';
import { MolassesTypeComponent } from './molasses-type.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddeditMolassestypeComponent } from './addedit-molassestype/addedit-molassestype.component';
import { ViewMolassestypeComponent } from './view-molassestype/view-molassestype.component';

@NgModule({
  declarations: [
    MolassesTypeComponent,
    AddeditMolassestypeComponent,
    ViewMolassestypeComponent
  ],
  imports: [
    CommonModule,
    MolassesTypeRoutingModule,
    SharedModule
  ]
})
export class MolassesTypeModule { }
