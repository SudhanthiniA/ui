import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremisestypeComponent } from './premisestype.component';
import { AddpremisestypeComponent } from './addpremisestype/addpremisestype.component';
import { ViewpremisestypeComponent } from './viewpremisestype/viewpremisestype.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { PremisestypeRoutingModule } from './premisestype-routing.module';


@NgModule({
  declarations: [PremisestypeComponent, AddpremisestypeComponent, ViewpremisestypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    PremisestypeRoutingModule
  ]
})
export class PremisestypeModule { }
