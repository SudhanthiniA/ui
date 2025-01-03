import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mf6part1RoutingModule } from './mf6part1-routing.module';
import { Mf6part1Component } from './mf6part1.component';
import { Addeditmf6part1Component } from './addeditmf6part1/addeditmf6part1.component';
import { Viewpreviewmf6part1Component } from './viewpreviewmf6part1/viewpreviewmf6part1.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Mf6part1Component, Addeditmf6part1Component, Viewpreviewmf6part1Component],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    Mf6part1RoutingModule
  ]
})
export class Mf6part1Module { }
