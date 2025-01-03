import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MolassesrecieptandconsumpRoutingModule } from './molassesrecieptandconsump-routing.module';
import { MolassesrecieptandconsumpComponent } from './molassesrecieptandconsump.component';
import { AddeditmolassesandconsumptionComponent } from './addeditmolassesandconsumption/addeditmolassesandconsumption.component';
import { ViewmolassesandconsumptionComponent } from './viewmolassesandconsumption/viewmolassesandconsumption.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MolassesrecieptandconsumpComponent, AddeditmolassesandconsumptionComponent, ViewmolassesandconsumptionComponent],
  imports: [
    CommonModule,
    SharedModule,
     NgbModule,

    MolassesrecieptandconsumpRoutingModule
  ]
})
export class MolassesrecieptandconsumpModule { }
